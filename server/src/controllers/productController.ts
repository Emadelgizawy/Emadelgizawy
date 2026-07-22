// Product Controller
import { Request, Response } from 'express';
import Product from '../models/Product';

export const getAll = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 12, category, search } = req.query;

    const filter: any = { isActive: true };
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { nameAr: { $regex: search, $options: 'i' } },
        { nameEn: { $regex: search, $options: 'i' } },
        { descriptionAr: { $regex: search, $options: 'i' } }
      ];
    }

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .skip(skip)
      .limit(limitNum)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: products,
      pagination: {
        total,
        pages: Math.ceil(total / limitNum),
        currentPage: pageNum
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'المنتج غير موجود' });
    }

    res.json({ success: true, data: product });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getFeatured = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isFeatured: true, isActive: true }).limit(8);
    res.json({ success: true, data: products });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    const { nameAr, nameEn, descriptionAr, category, price, discount } = req.body;

    const finalPrice = price - (price * (discount || 0)) / 100;

    const product = new Product({
      ...req.body,
      finalPrice
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: 'تم إضافة المنتج بنجاح',
      data: product
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    const { price, discount } = req.body;
    const finalPrice = price - (price * (discount || 0)) / 100;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, finalPrice, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث المنتج بنجاح',
      data: product
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const delete_ = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'تم حذف المنتج بنجاح'
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

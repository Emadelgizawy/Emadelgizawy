// Product Controller
import { Request, Response } from 'express';
import Product from '../models/Product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { category, page = 1, limit = 12, search } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    let query: any = { isActive: true };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { nameAr: { $regex: search, $options: 'i' } },
        { nameEn: { $regex: search, $options: 'i' } }
      ];
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: products,
      pagination: {
        total,
        pages: Math.ceil(total / Number(limit)),
        currentPage: page
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');

    if (!product) {
      return res.status(404).json({ error: 'المنتج غير موجود' });
    }

    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({
      isActive: true,
      isFeatured: true
    }).limit(6);

    res.json({
      success: true,
      data: products
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nameAr, nameEn, descriptionAr, category, price, images, specifications } = req.body;

    if (!nameAr || !nameEn || !descriptionAr || !category || !price) {
      return res.status(400).json({ error: 'البيانات المطلوبة غير كاملة' });
    }

    const product = new Product({
      nameAr,
      nameEn,
      descriptionAr,
      category,
      price,
      finalPrice: price,
      images,
      specifications,
      sku: `SKU-${Date.now()}`,
      stock: 0
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: 'تم إضافة المنتج بنجاح',
      data: product
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في إضافة المنتج' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!product) {
      return res.status(404).json({ error: 'المنتج غير موجود' });
    }

    res.json({
      success: true,
      message: 'تم تحديث المنتج',
      data: product
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في التحديث' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'تم حذف المنتج'
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في الحذف' });
  }
};

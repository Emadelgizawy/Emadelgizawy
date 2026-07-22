// Order Controller
import { Request, Response } from 'express';
import Order from '../models/Order';
import { generateOrderNumber } from '../utils/helpers';

export const create = async (req: Request, res: Response) => {
  try {
    const { items, deliveryAddress, paymentMethod, notes } = req.body;

    let subtotal = 0;
    // Calculate subtotal (will be done with actual product prices)
    items.forEach((item: any) => {
      subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.15; // 15% tax
    const shippingCost = 100; // Fixed shipping
    const totalPrice = subtotal + tax + shippingCost;

    const order = new Order({
      orderNumber: generateOrderNumber(),
      userId: req.user?.userId,
      items,
      subtotal,
      tax,
      shippingCost,
      totalPrice,
      paymentMethod,
      deliveryAddress,
      notes,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'تم إنشاء الطلب بنجاح',
      data: order
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ userId: req.user?.userId }).sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'الطلب غير موجود' });
    }

    // Check authorization
    if (order.userId.toString() !== req.user?.userId && req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    res.json({ success: true, data: order });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث حالة الطلب',
      data: order
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

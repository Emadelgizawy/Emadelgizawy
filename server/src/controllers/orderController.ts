// Order Controller
import { Request, Response } from 'express';
import Order from '../models/Order';

interface AuthRequest extends Request {
  user?: any;
}

export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { items, deliveryAddress, paymentMethod, notes } = req.body;
    const userId = req.user?.userId;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'السلة فارغة' });
    }

    // Calculate totals
    let subtotal = 0;
    // In a real app, you would fetch prices from database
    items.forEach((item: any) => {
      subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.15;
    const shippingCost = 100;
    const totalPrice = subtotal + tax + shippingCost;

    const order = new Order({
      orderNumber: `ORD-${Date.now()}`,
      userId,
      items,
      subtotal,
      tax,
      shippingCost,
      totalPrice,
      deliveryAddress,
      paymentMethod,
      notes,
      status: 'pending'
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'تم إنشاء الطلب بنجاح',
      data: order
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في إنشاء الطلب' });
  }
};

export const getMyOrders = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const getOrderById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ error: 'الطلب غير موجود' });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث حالة الطلب',
      data: order
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

// Booking Controller
import { Request, Response } from 'express';
import Booking from '../models/Booking';

interface AuthRequest extends Request {
  user?: any;
}

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const { serviceType, date, time, location, notes } = req.body;
    const userId = req.user?.userId;

    if (!serviceType || !date || !time) {
      return res.status(400).json({ error: 'البيانات المطلوبة غير كاملة' });
    }

    const booking = new Booking({
      bookingNumber: `BK-${Date.now()}`,
      userId,
      serviceType,
      date: new Date(date),
      time,
      location,
      notes,
      status: 'pending'
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'تم حجز الموعد بنجاح',
      data: booking
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في الحجز' });
  }
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const bookings = await Booking.find({ userId }).sort({ date: -1 });

    res.json({
      success: true,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث الحجز',
      data: booking
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndUpdate(id, { status: 'cancelled', updatedAt: new Date() });

    res.json({
      success: true,
      message: 'تم إلغاء الحجز'
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

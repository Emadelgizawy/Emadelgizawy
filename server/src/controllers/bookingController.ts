// Booking Controller
import { Request, Response } from 'express';
import Booking from '../models/Booking';
import { generateBookingNumber } from '../utils/helpers';

export const create = async (req: Request, res: Response) => {
  try {
    const { serviceType, date, time, location, notes } = req.body;

    const booking = new Booking({
      bookingNumber: generateBookingNumber(),
      userId: req.user?.userId,
      serviceType,
      date: new Date(date),
      time,
      location,
      notes
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'تم حجز الموعد بنجاح',
      data: booking
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({ userId: req.user?.userId }).sort({ date: -1 });
    res.json({ success: true, data: bookings });
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
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث حالة الحجز',
      data: booking
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const cancel = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'الحجز غير موجود' });
    }

    if (booking.userId.toString() !== req.user?.userId && req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({
      success: true,
      message: 'تم إلغاء الحجز',
      data: booking
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

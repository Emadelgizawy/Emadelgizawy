// Message Controller
import { Request, Response } from 'express';
import Message from '../models/Message';

export const create = async (req: Request, res: Response) => {
  try {
    const { senderName, senderPhone, senderEmail, content, channel } = req.body;

    const message = new Message({
      senderId: req.user?.userId,
      senderName,
      senderPhone,
      senderEmail,
      content,
      channel
    });

    await message.save();

    res.status(201).json({
      success: true,
      message: 'تم استلام رسالتك، سيتم الرد عليك قريباً',
      data: message
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    const { status = 'open', sort = '-createdAt', page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const messages = await Message.find({ status })
      .sort(sort as string)
      .skip(skip)
      .limit(limitNum);

    const total = await Message.countDocuments({ status });

    res.json({
      success: true,
      data: messages,
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

export const updateStatus = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'غير مصرح' });
    }

    const { status } = req.body;
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status, read: true, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث حالة الرسالة',
      data: message
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

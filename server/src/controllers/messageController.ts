// Message Controller
import { Request, Response } from 'express';
import Message from '../models/Message';

interface AuthRequest extends Request {
  user?: any;
}

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { senderName, senderPhone, senderEmail, content, channel, relatedOrder, attachments } = req.body;

    if (!senderName || !senderPhone || !content || !channel) {
      return res.status(400).json({ error: 'البيانات المطلوبة غير كاملة' });
    }

    const message = new Message({
      senderName,
      senderPhone,
      senderEmail,
      content,
      channel,
      relatedOrder,
      attachments,
      read: false,
      status: 'open'
    });

    await message.save();

    res.status(201).json({
      success: true,
      message: 'تم استقبال رسالتك، سيتم الرد عليك قريباً',
      data: message
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في إرسال الرسالة' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { status, channel } = req.query;
    let query: any = {};

    if (status) query.status = status;
    if (channel) query.channel = channel;

    const messages = await Message.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: messages
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const markMessageAsRead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndUpdate(
      id,
      { read: true, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث الرسالة',
      data: message
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const message = await Message.findByIdAndUpdate(
      id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      success: true,
      message: 'تم تحديث حالة الرسالة',
      data: message
    });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
};

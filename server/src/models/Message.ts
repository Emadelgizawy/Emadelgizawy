// Message Schema
import { Schema, model } from 'mongoose';

interface IMessage {
  senderId?: string;
  senderName: string;
  senderPhone: string;
  senderEmail?: string;
  content: string;
  channel: string;
  relatedOrder?: string;
  attachments?: string[];
  read: boolean;
  priority: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>({
  senderId: Schema.Types.ObjectId,
  senderName: {
    type: String,
    required: true
  },
  senderPhone: {
    type: String,
    required: true
  },
  senderEmail: String,
  content: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    enum: ['contact-form', 'whatsapp', 'messenger'],
    required: true
  },
  relatedOrder: Schema.Types.ObjectId,
  attachments: [String],
  read: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['normal', 'high', 'urgent'],
    default: 'normal'
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved', 'closed'],
    default: 'open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Message = model<IMessage>('Message', messageSchema);

export default Message;

// Order Schema
import { Schema, model } from 'mongoose';

interface IOrder {
  orderNumber: string;
  userId: string;
  items: any[];
  subtotal: number;
  tax: number;
  shippingCost: number;
  totalPrice: number;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  deliveryAddress: any;
  estimatedDelivery: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>({
  orderNumber: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: Schema.Types.ObjectId,
      productName: String,
      quantity: Number,
      price: Number,
      customization: Schema.Types.Mixed
    }
  ],
  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'cash', 'transfer'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  deliveryAddress: {
    name: String,
    phone: String,
    city: String,
    street: String
  },
  estimatedDelivery: Date,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Order = model<IOrder>('Order', orderSchema);

export default Order;

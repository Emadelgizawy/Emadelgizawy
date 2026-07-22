// User Schema
import { Schema, model } from 'mongoose';

interface IUser {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  address: {
    city: string;
    district?: string;
    street?: string;
    postalCode?: string;
  };
  role: 'customer' | 'admin';
  avatar?: string;
  wishlist: string[];
  savedDesigns: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: [true, 'الاسم الكامل مطلوب'],
    trim: true,
    minlength: [3, 'الاسم يجب أن يكون 3 أحرف على الأقل']
  },
  email: {
    type: String,
    required: [true, 'البريد الإلكتروني مطلوب'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'البريد الإلكتروني غير صحيح']
  },
  phone: {
    type: String,
    required: [true, 'رقم الهاتف مطلوب'],
    match: [/^\+?\d{10,}$/, 'رقم الهاتف غير صحيح']
  },
  password: {
    type: String,
    required: [true, 'كلمة المرور مطلوبة'],
    minlength: [6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'],
    select: false
  },
  address: {
    city: String,
    district: String,
    street: String,
    postalCode: String
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  },
  avatar: String,
  wishlist: [Schema.Types.ObjectId],
  savedDesigns: [Schema.Types.ObjectId],
  isActive: {
    type: Boolean,
    default: true
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

const User = model<IUser>('User', userSchema);

export default User;

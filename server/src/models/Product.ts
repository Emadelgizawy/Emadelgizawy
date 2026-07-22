// Product Schema
import { Schema, model } from 'mongoose';

interface IProduct {
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn?: string;
  category: 'appliances' | 'granite' | 'marble' | 'accessories';
  subcategory: string;
  price: number;
  discount?: number;
  finalPrice: number;
  images: string[];
  thumbnail: string;
  specifications: any;
  stock: number;
  sku: string;
  manufacturer: string;
  rating: number;
  reviews: string[];
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  nameAr: {
    type: String,
    required: [true, 'اسم المنتج بالعربية مطلوب']
  },
  nameEn: {
    type: String,
    required: [true, 'اسم المنتج بالإنجليزية مطلوب']
  },
  descriptionAr: {
    type: String,
    required: [true, 'وصف المنتج بالعربية مطلوب']
  },
  descriptionEn: String,
  category: {
    type: String,
    enum: ['appliances', 'granite', 'marble', 'accessories'],
    required: true
  },
  subcategory: String,
  price: {
    type: Number,
    required: [true, 'السعر مطلوب'],
    min: [0, 'السعر يجب أن يكون موجب']
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'الخصم لا يمكن أن يكون سالب']
  },
  finalPrice: {
    type: Number,
    required: true
  },
  images: [String],
  thumbnail: String,
  specifications: Schema.Types.Mixed,
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  sku: {
    type: String,
    unique: true,
    required: true
  },
  manufacturer: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [Schema.Types.ObjectId],
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
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

const Product = model<IProduct>('Product', productSchema);

export default Product;

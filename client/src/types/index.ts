export interface Product {
  _id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  category: 'appliances' | 'granite' | 'marble' | 'accessories';
  price: number;
  discount?: number;
  finalPrice: number;
  images: string[];
  thumbnail: string;
  specifications: Record<string, any>;
  stock: number;
  sku: string;
  rating: number;
  tags: string[];
  isFeatured: boolean;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: 'customer' | 'admin';
  avatar?: string;
  address?: {
    city: string;
    district?: string;
    street?: string;
    postalCode?: string;
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
  customization?: Record<string, any>;
}

export interface Order {
  _id: string;
  orderNumber: string;
  items: any[];
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface Booking {
  _id: string;
  bookingNumber: string;
  serviceType: 'consultation' | 'measurement' | 'installation';
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

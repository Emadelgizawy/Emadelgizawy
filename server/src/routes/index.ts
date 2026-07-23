// Routes
import { Router } from 'express';
import { register, login, getProfile, updateProfile } from '../controllers/authController';
import { getAllProducts, getProductById, getFeaturedProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { createOrder, getMyOrders, getOrderById, updateOrderStatus } from '../controllers/orderController';
import { createBooking, getMyBookings, updateBookingStatus, cancelBooking } from '../controllers/bookingController';
import { createMessage, getMessages, markMessageAsRead, updateMessageStatus } from '../controllers/messageController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

// Auth Routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/profile', authMiddleware, getProfile);
router.put('/auth/profile', authMiddleware, updateProfile);

// Product Routes
router.get('/products', getAllProducts);
router.get('/products/featured', getFeaturedProducts);
router.get('/products/:id', getProductById);
router.post('/products', adminMiddleware, createProduct);
router.put('/products/:id', adminMiddleware, updateProduct);
router.delete('/products/:id', adminMiddleware, deleteProduct);

// Order Routes
router.post('/orders', authMiddleware, createOrder);
router.get('/orders/my-orders', authMiddleware, getMyOrders);
router.get('/orders/:id', authMiddleware, getOrderById);
router.put('/orders/:id', adminMiddleware, updateOrderStatus);

// Booking Routes
router.post('/bookings', authMiddleware, createBooking);
router.get('/bookings/my-bookings', authMiddleware, getMyBookings);
router.put('/bookings/:id', adminMiddleware, updateBookingStatus);
router.delete('/bookings/:id', authMiddleware, cancelBooking);

// Message Routes
router.post('/messages', createMessage);
router.get('/messages', adminMiddleware, getMessages);
router.put('/messages/:id/read', adminMiddleware, markMessageAsRead);
router.put('/messages/:id', adminMiddleware, updateMessageStatus);

export default router;

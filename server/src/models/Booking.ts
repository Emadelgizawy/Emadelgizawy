// Booking Schema
import { Schema, model } from 'mongoose';

interface IBooking {
  bookingNumber: string;
  userId: string;
  serviceType: string;
  date: Date;
  time: string;
  duration: number;
  location: any;
  notes?: string;
  status: string;
  reminderSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  bookingNumber: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceType: {
    type: String,
    enum: ['consultation', 'measurement', 'installation'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: String,
  duration: {
    type: Number,
    default: 60
  },
  location: {
    address: String,
    lat: Number,
    lng: Number
  },
  notes: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  reminderSent: {
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

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;

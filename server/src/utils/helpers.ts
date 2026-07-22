// Helper Functions
export const generateOrderNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ORD-${new Date().getFullYear()}-${timestamp.toString().slice(-6)}-${random}`;
};

export const generateBookingNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `BK-${new Date().getFullYear()}-${timestamp.toString().slice(-6)}-${random}`;
};

export const generateSKU = (category: string): string => {
  const categoryCode = category.substring(0, 3).toUpperCase();
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  return `SKU-${categoryCode}-${timestamp}-${random}`;
};

export const calculateDiscount = (originalPrice: number, discountPercent: number): number => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};

export const formatArabicDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('ar-SA', options);
};

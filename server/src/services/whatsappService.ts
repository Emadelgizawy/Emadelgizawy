// WhatsApp Integration Service
import axios from 'axios';

const WHATSAPP_API_URL = 'https://graph.instagram.com/v18.0';
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

export const sendWhatsAppMessage = async (phoneNumber: string, message: string) => {
  try {
    const response = await axios.post(
      `${WHATSAPP_API_URL}/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'text',
        text: {
          preview_url: true,
          body: message
        }
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('WhatsApp sending error:', error);
    throw error;
  }
};

export const sendOrderConfirmationWhatsApp = async (phoneNumber: string, orderNumber: string, totalPrice: number) => {
  const message = `
🎉 تم استقبال طلبك بنجاح!

رقم الطلب: ${orderNumber}
الإجمالي: ${totalPrice} ريال

سيتم التواصل معك قريباً

شكراً لاختيارك مطابخ الجيزاوي ✨
  `;

  return sendWhatsAppMessage(phoneNumber, message);
};

export const sendBookingConfirmationWhatsApp = async (phoneNumber: string, bookingNumber: string, date: string, time: string) => {
  const message = `
✅ تم تأكيد موعدك!

رقم الحجز: ${bookingNumber}
التاريخ: ${date}
الوقت: ${time}

ننتظرك في مطابخ الجيزاوي 🏠
  `;

  return sendWhatsAppMessage(phoneNumber, message);
};

// WhatsApp Integration Service
import axios from 'axios';

const WHATSAPP_API_URL = `https://graph.instagram.com/v18.0`;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;
const WHATSAPP_TOKEN = process.env.WHATSAPP_API_KEY;

export const whatsappService = {
  sendMessage: async (phoneNumber: string, message: string) => {
    try {
      const response = await axios.post(
        `${WHATSAPP_API_URL}/${WHATSAPP_PHONE_ID}/messages`,
        {
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'text',
          text: { body: message }
        },
        {
          headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('خطأ في إرسال رسالة WhatsApp:', error);
      throw error;
    }
  },

  sendOrderConfirmation: async (phoneNumber: string, orderNumber: string, totalPrice: number) => {
    const message = `
مرحباً! ✨

تم تأكيد طلبك برقم: ${orderNumber}
المبلغ الإجمالي: ${totalPrice} ريال

شكراً لاختيارك مطابخ الجيزاوي!

🏠 للمزيد من المعلومات:
https://kitchens.com

مع تحيات فريق مطابخ الجيزاوي
    `;
    return whatsappService.sendMessage(phoneNumber, message);
  },

  sendBookingConfirmation: async (phoneNumber: string, bookingNumber: string, date: string, time: string) => {
    const message = `
مرحباً! 📅

تم تأكيد حجزك برقم: ${bookingNumber}
التاريخ: ${date}
الوقت: ${time}

سننتظركم بفارغ الصبر!

🏠 مطابخ الجيزاوي
    `;
    return whatsappService.sendMessage(phoneNumber, message);
  }
};

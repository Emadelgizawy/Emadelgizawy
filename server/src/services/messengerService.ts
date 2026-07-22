// Facebook Messenger Integration Service
import axios from 'axios';

const MESSENGER_API_URL = 'https://graph.facebook.com/v18.0';
const PAGE_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const PAGE_ID = process.env.FACEBOOK_PAGE_ID;

export const messengerService = {
  sendMessage: async (recipientId: string, message: string) => {
    try {
      const response = await axios.post(
        `${MESSENGER_API_URL}/${PAGE_ID}/messages`,
        {
          recipient: { id: recipientId },
          message: { text: message }
        },
        {
          params: { access_token: PAGE_ACCESS_TOKEN }
        }
      );
      return response.data;
    } catch (error) {
      console.error('خطأ في إرسال رسالة Messenger:', error);
      throw error;
    }
  },

  sendOrderConfirmation: async (recipientId: string, orderNumber: string, totalPrice: number) => {
    const message = `
مرحباً! ✨

تم تأكيد طلبك برقم: ${orderNumber}
المبلغ الإجمالي: ${totalPrice} ريال

شكراً لاختيارك مطابخ الجيزاوي!

🏠 لتتبع طلبك:
https://kitchens.com/order/${orderNumber}
    `;
    return messengerService.sendMessage(recipientId, message);
  },

  sendBookingConfirmation: async (recipientId: string, bookingNumber: string, date: string, time: string) => {
    const message = `
مرحباً! 📅

تم تأكيد حجزك برقم: ${bookingNumber}
التاريخ: ${date}
الوقت: ${time}

سننتظركم بفارغ الصبر! 🏠
    `;
    return messengerService.sendMessage(recipientId, message);
  }
};

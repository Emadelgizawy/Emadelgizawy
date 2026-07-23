// Facebook Messenger Integration Service
import axios from 'axios';

const FACEBOOK_API_URL = 'https://graph.instagram.com/v18.0';
const FACEBOOK_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

export const sendFacebookMessage = async (recipientId: string, message: string) => {
  try {
    const response = await axios.post(
      `${FACEBOOK_API_URL}/me/messages`,
      {
        recipient: {
          id: recipientId
        },
        message: {
          text: message
        }
      },
      {
        params: {
          access_token: FACEBOOK_PAGE_ACCESS_TOKEN
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Facebook Messenger error:', error);
    throw error;
  }
};

export const sendOrderUpdateFacebook = async (recipientId: string, orderNumber: string, status: string) => {
  const statusAr: any = {
    pending: 'قيد الانتظار',
    confirmed: 'تم التأكيد',
    processing: 'قيد المعالجة',
    shipped: 'تم الشحن',
    delivered: 'تم التسليم'
  };

  const message = `
📦 تحديث طلبك

رقم الطلب: ${orderNumber}
الحالة: ${statusAr[status] || status}

سيتم إخبارك بأي تحديثات جديدة
  `;

  return sendFacebookMessage(recipientId, message);
};

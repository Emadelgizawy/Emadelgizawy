import api from './api';

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

interface JokeResponse {
  success: boolean;
  data?: Joke | Joke[];
  error?: string;
}

export const jokeApiService = {
  /**
   * Get a random joke from the backend
   */
  getRandomJoke: async (): Promise<JokeResponse> => {
    try {
      const response = await api.get('/jokes/random');
      return response.data;
    } catch (error) {
      console.error('Error fetching joke:', error);
      return {
        success: false,
        error: 'حدث خطأ في جلب النكتة'
      };
    }
  },

  /**
   * Get jokes by category
   */
  getJokeByCategory: async (category: string): Promise<JokeResponse> => {
    try {
      const response = await api.get(`/jokes/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching joke by category:', error);
      return {
        success: false,
        error: 'حدث خطأ في جلب النكتة'
      };
    }
  },

  /**
   * Get multiple random jokes
   */
  getRandomJokes: async (count: number = 5): Promise<JokeResponse> => {
    try {
      const response = await api.get(`/jokes/random?count=${count}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching jokes:', error);
      return {
        success: false,
        error: 'حدث خطأ في جلب النكات'
      };
    }
  }
};

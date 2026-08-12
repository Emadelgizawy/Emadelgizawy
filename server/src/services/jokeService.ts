// Joke Service (Backend)
import axios from 'axios';

const JOKE_API_URL = 'https://official-joke-api.appspot.com';

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

/**
 * Fetch a random joke from external API
 */
export const getRandomJoke = async (): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke>(
      `${JOKE_API_URL}/random_joke`,
      { timeout: 5000 }
    );
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching random joke:', error);
    return {
      success: false,
      error: 'فشل في جلب النكتة من الخادم الخارجي'
    };
  }
};

/**
 * Fetch jokes by specific type
 */
export const getJokeByType = async (jokeType: string): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke>(
      `${JOKE_API_URL}/jokes/${encodeURIComponent(jokeType)}/random`,
      { timeout: 5000 }
    );
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error(`Error fetching ${jokeType} joke:`, error);
    return {
      success: false,
      error: `فشل في جلب نكتة من نوع ${jokeType}`
    };
  }
};

/**
 * Fetch multiple random jokes
 */
export const getRandomJokes = async (count: number = 5): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke[]>(
      `${JOKE_API_URL}/jokes/random/${Math.min(count, 20)}`,
      { timeout: 5000 }
    );
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching random jokes:', error);
    return {
      success: false,
      error: 'فشل في جلب النكات من الخادم الخارجي'
    };
  }
};

/**
 * Get available joke types from API
 */
export const getAvailableJokeTypes = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(
      `${JOKE_API_URL}/types`,
      { timeout: 5000 }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching joke types:', error);
    // Return default types if API fails
    return ['general', 'knock-knock', 'programming'];
  }
};

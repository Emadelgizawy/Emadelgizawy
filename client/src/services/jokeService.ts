// Joke Generator Service
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
 * Get a random joke from the external API
 */
export const getRandomJoke = async (): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke>(`${JOKE_API_URL}/random_joke`);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching random joke:', error);
    return {
      success: false,
      error: 'فشل في جلب النكتة. يرجى المحاولة لاحقاً'
    };
  }
};

/**
 * Get a random joke of a specific type
 */
export const getJokeByType = async (jokeType: string): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke>(
      `${JOKE_API_URL}/jokes/${jokeType}/random`
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
 * Get multiple random jokes
 */
export const getRandomJokes = async (count: number = 5): Promise<JokeResponse> => {
  try {
    const response = await axios.get<Joke[]>(
      `${JOKE_API_URL}/jokes/random/${count}`
    );
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching random jokes:', error);
    return {
      success: false,
      error: 'فشل في جلب النكات. يرجى المحاولة لاحقاً'
    };
  }
};

/**
 * Get jokes by type (list all available types)
 */
export const getAvailableJokeTypes = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(
      `${JOKE_API_URL}/types`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching joke types:', error);
    return ['general', 'knock-knock', 'programming'];
  }
};

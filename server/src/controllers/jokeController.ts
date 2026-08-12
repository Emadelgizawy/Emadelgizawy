// Joke Controller
import { Request, Response } from 'express';
import { getRandomJoke, getJokeByType, getRandomJokes, getAvailableJokeTypes } from '../services/jokeService';

interface JokeResponse {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Get a random joke
 * GET /api/v1/jokes/random
 */
export const getRandomJokeController = async (req: Request, res: Response) => {
  try {
    const result = await getRandomJoke();
    res.json(result);
  } catch (error) {
    console.error('Error in getRandomJokeController:', error);
    res.status(500).json({
      success: false,
      error: 'فشل في جلب النكتة'
    });
  }
};

/**
 * Get a joke by specific type
 * GET /api/v1/jokes/category/:type
 */
export const getJokeByCategoryController = async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const result = await getJokeByType(type);
    res.json(result);
  } catch (error) {
    console.error('Error in getJokeByCategoryController:', error);
    res.status(500).json({
      success: false,
      error: 'فشل في جلب النكتة'
    });
  }
};

/**
 * Get multiple random jokes
 * GET /api/v1/jokes/random?count=5
 */
export const getMultipleJokesController = async (req: Request, res: Response) => {
  try {
    const count = parseInt(req.query.count as string) || 5;
    const result = await getRandomJokes(Math.min(count, 20)); // Max 20 jokes
    res.json(result);
  } catch (error) {
    console.error('Error in getMultipleJokesController:', error);
    res.status(500).json({
      success: false,
      error: 'فشل في جلب النكات'
    });
  }
};

/**
 * Get available joke types
 * GET /api/v1/jokes/types
 */
export const getJokeTypesController = async (req: Request, res: Response) => {
  try {
    const types = await getAvailableJokeTypes();
    res.json({
      success: true,
      data: types
    });
  } catch (error) {
    console.error('Error in getJokeTypesController:', error);
    res.status(500).json({
      success: false,
      error: 'فشل في جلب أنواع النكات'
    });
  }
};

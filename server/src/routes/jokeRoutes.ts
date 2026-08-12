// Add to server/src/routes/index.ts
import {
  getRandomJokeController,
  getJokeByCategoryController,
  getMultipleJokesController,
  getJokeTypesController
} from '../controllers/jokeController';

// Add these routes to your existing router:

// Joke Routes
router.get('/jokes/random', getRandomJokeController);
router.get('/jokes/category/:type', getJokeByCategoryController);
router.get('/jokes/random?count=', getMultipleJokesController);
router.get('/jokes/types', getJokeTypesController);

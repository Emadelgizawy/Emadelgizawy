import { create } from 'zustand';

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

interface JokeStore {
  currentJoke: Joke | null;
  jokes: Joke[];
  isLoading: boolean;
  favorites: Joke[];
  setCurrentJoke: (joke: Joke | null) => void;
  setJokes: (jokes: Joke[]) => void;
  setLoading: (loading: boolean) => void;
  addFavorite: (joke: Joke) => void;
  removeFavorite: (jokeId: number) => void;
  clearFavorites: () => void;
}

export const useJokeStore = create<JokeStore>((set, get) => ({
  currentJoke: null,
  jokes: [],
  isLoading: false,
  favorites: JSON.parse(localStorage.getItem('favoritJokes') || '[]'),
  
  setCurrentJoke: (joke) => set({ currentJoke: joke }),
  
  setJokes: (jokes) => set({ jokes }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  addFavorite: (joke) => {
    set((state) => {
      const newFavorites = [...state.favorites, joke];
      localStorage.setItem('favoritJokes', JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
  
  removeFavorite: (jokeId) => {
    set((state) => {
      const newFavorites = state.favorites.filter(j => j.id !== jokeId);
      localStorage.setItem('favoritJokes', JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
  
  clearFavorites: () => {
    localStorage.removeItem('favoritJokes');
    set({ favorites: [] });
  }
}));

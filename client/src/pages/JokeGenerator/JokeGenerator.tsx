import React, { useState, useEffect } from 'react';
import { getRandomJoke, getJokeByType, getRandomJokes, getAvailableJokeTypes } from '../../services/jokeService';
import { useJokeStore } from '../../store/jokeStore';
import { Heart, RotateCw, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const JokeGenerator: React.FC = () => {
  const [jokeTypes, setJokeTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  const { currentJoke, isLoading, favorites, setCurrentJoke, setLoading, addFavorite, removeFavorite } = useJokeStore();

  useEffect(() => {
    const fetchTypes = async () => {
      const types = await getAvailableJokeTypes();
      setJokeTypes(types);
    };
    fetchTypes();
    fetchRandomJoke();
  }, []);

  const fetchRandomJoke = async () => {
    setLoading(true);
    setShowPunchline(false);
    let result;

    if (selectedType === 'all') {
      result = await getRandomJoke();
    } else {
      result = await getJokeByType(selectedType);
    }

    if (result.success && result.data) {
      setCurrentJoke(result.data as Joke);
    } else {
      toast.error(result.error || 'فشل في جلب النكتة');
    }
    setLoading(false);
  };

  const isFavorited = currentJoke ? favorites.some(j => j.id === currentJoke.id) : false;

  const handleToggleFavorite = () => {
    if (!currentJoke) return;

    if (isFavorited) {
      removeFavorite(currentJoke.id);
      toast.success('تم حذف النكتة من المفضلة');
    } else {
      addFavorite(currentJoke);
      toast.success('تمت إضافة النكتة للمفضلة');
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-3">😄 مولد النكات</h1>
          <p className="text-gray-600 text-lg">استمتع بنكات عشوائية مضحكة</p>
        </div>

        {/* Category Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-primary-900 mb-4">اختر نوع النكتة:</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => {
                setSelectedType('all');
                setShowPunchline(false);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedType === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              الكل
            </button>
            {jokeTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setShowPunchline(false);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedType === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Joke Display */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 min-h-64 flex flex-col justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center">
              <Loader className="w-12 h-12 text-primary-600 animate-spin mb-4" />
              <p className="text-gray-600 text-lg">جاري تحميل نكتة مضحكة...</p>
            </div>
          ) : currentJoke ? (
            <div className="space-y-6">
              {/* Setup */}
              <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
                <p className="text-xl text-primary-900 font-semibold text-center">
                  {currentJoke.setup}
                </p>
              </div>

              {/* Punchline */}
              {showPunchline && (
                <div className="bg-accent-50 p-6 rounded-lg border-2 border-accent-200 animate-fadeIn">
                  <p className="text-xl text-accent-900 font-bold text-center">
                    {currentJoke.punchline}
                  </p>
                </div>
              )}

              {/* Show Punchline Button */}
              {!showPunchline && (
                <button
                  onClick={() => setShowPunchline(true)}
                  className="btn-primary mx-auto block w-full md:w-auto"
                >
                  اضغط لرؤية النهاية 😂
                </button>
              )}

              {/* Joke Type Badge */}
              <div className="text-center">
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold capitalize">
                  النوع: {currentJoke.type}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">فشل في تحميل النكتة</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={fetchRandomJoke}
            disabled={isLoading}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCw className="w-5 h-5" />
            نكتة جديدة
          </button>
          <button
            onClick={handleToggleFavorite}
            disabled={!currentJoke}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              isFavorited
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
            {isFavorited ? 'أضيفت' : 'إضافة'}
          </button>
        </div>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">❤️ النكات المفضلة ({favorites.length})</h2>
            <div className="space-y-4">
              {favorites.map((joke) => (
                <div key={joke.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent-500">
                  <p className="text-gray-900 font-semibold mb-2">{joke.setup}</p>
                  <p className="text-gray-700 mb-3">{joke.punchline}</p>
                  <button
                    onClick={() => removeFavorite(joke.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    إزالة من المفضلة
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeGenerator;

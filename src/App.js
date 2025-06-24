import React, { useEffect, useState } from 'react';

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch('https://hi-anime-api-seven.vercel.app/anime') // adjust if endpoint is different
      .then(res => res.json())
      .then(data => setAnimeList(data))
      .catch(err => console.error('Error loading anime:', err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🔥 Latest Anime</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animeList.map(anime => (
          <div
            key={anime._id}
            className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={anime.poster}
              alt={anime.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{anime.name}</h2>
              <p className="text-sm text-gray-400 line-clamp-2">{anime.description}</p>
              <p className="mt-2 text-xs text-gray-300">Episodes: Sub {anime.episodes?.sub || 0}, Dub {anime.episodes?.dub || 0}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

const KEY = 'bc9cf4cd';

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');

        //--- MAIN PART ---//
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Something went wrong. Check your internet conneection');
        const data = await res.json();
        if (data.Response === 'False') throw new Error('Movie not found. Check the spelling');
        setMovies(data.Search);

        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log(`---AAAAAAAAA--- ${err} ---AAAAAAAAA---`);
          setError(err.message);
        }
      } finally {
        //--- HIDE LAODER ---//
        setIsLoading(false);
      }
    }

    if (!query) {
      setMovies([]);
      setError('');
      return;
    }

    callBack?.();
    fetchMovies();

    return () => controller.abort();
  }, [query /*, callback*/]);

  return { movies, isLoading, error };
}

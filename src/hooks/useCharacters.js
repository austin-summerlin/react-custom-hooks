import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/harryPotterApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};

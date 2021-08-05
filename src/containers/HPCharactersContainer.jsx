/* eslint-disable max-len */
import React from 'react';
import CharacterList from '../components/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

function HPCharactersContainer() {
  const { characters, loading } = useCharacters();
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <CharacterList characters={characters} />}
    </div>
  );
}

export default HPCharactersContainer;

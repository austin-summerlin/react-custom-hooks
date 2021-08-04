import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import Character from './Character';

function CharacterList() {
  const { characters } = useCharacters();
  return (
    <ul aria-label="characters">
      {characters.map((character) => {
        return (
          <li key={character.name}>
            <Character
              image={character.image}
              name={character.name}
              house={character.house}
              patronus={character.patronus}
              wand={character.wand}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CharacterList;

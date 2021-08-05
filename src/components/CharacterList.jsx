/* eslint-disable keyword-spacing */
import React from 'react';
import Character from '../components/Character';
import { useCharacters } from '../hooks/useCharacters';

function CharacterList() {
  const { characters } = useCharacters();

  return (
    <ul aria-label="character">
      {characters.map((character) => {
        return (
          <li key={character.name}>
            <Character
              image={character.image}
              name={character.name}
              house={character.house}
              patronus={character.patronus}
            />
          </li>
        );
      })}
    </ul>
  );
}


export default CharacterList;

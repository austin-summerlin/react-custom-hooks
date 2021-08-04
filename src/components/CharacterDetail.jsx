/* eslint-disable keyword-spacing */
import React from 'react';
import { useCharacters } from '../hooks/useCharacters';

function CharacterDetail() {
  const { characters, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;
  return (
    <section>
      <img src={characters.image} alt={characters.name} />
      <p>{characters.name}</p>
      <p>{characters.house}</p>
      <p>{characters.patronus}</p>
      <p>{characters.wand}</p>
    </section>
  );
}

export default CharacterDetail;

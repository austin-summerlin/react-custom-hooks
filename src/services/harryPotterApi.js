export const fetchCharacters = async () => {
  const res = fetch('https://hp-api.herokuapp.com/api/characters');
  const characters = await res.json();
  return characters.map(character => ({
    name: character.name,
    house: character.house,
    patronus: character.patronus,
    image: character.image,
    wand: character.wand,
  }));
};

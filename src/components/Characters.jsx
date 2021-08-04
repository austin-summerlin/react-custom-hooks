import React from 'react';
import PropTypes from 'prop-types';

function Character({
  name,
  house,
  patronus,
  image,
  wand,
}) {
  return (
    <div className="character">
      <img src={image} alt={name} />
      <p>Name:{name}</p>
      <p>House:{house}</p>
      <p>Patronus:{patronus}</p>
      <p>Wand:{wand}</p>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  house: PropTypes.string,
  patronus: PropTypes.string,
  image: PropTypes.string,
  wand: PropTypes.string,
};

export default Character;


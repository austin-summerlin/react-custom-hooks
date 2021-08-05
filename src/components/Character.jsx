import React from 'react';
import PropTypes from 'prop-types';

function Character({
  name,
  image,
  house,
  patronus,
  wand
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>Name: {name}</p>
      <p>House: {house}</p>
      <p>Patronus: {patronus}</p>

    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  house: PropTypes.string,
  patronus: PropTypes.string,
  image: PropTypes.string,
};

export default Character;


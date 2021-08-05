/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.css';

export default function Header() {
  return (
    <div className={style.header}>
      <nav>
        <NavLink exact to="/" activeClassName="Link" className={style.home}>
          Home
        </NavLink>
        <NavLink to="/characters" activeClassName="Link" className={style.characters}>
          Characters
        </NavLink>
      </nav>
    </div>
  );
}

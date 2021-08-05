import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeClassName="Link">
          Home
        </NavLink>
        <NavLink to="/characters" activeClassName="Link">
          Characters
        </NavLink>
      </nav>
    </div>
  );
}

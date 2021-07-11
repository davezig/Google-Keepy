import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  //! TODO
  // - [] Can a function read/write css? Would I import the css file?
  // - [] Create a function to change the string-interpolated value of var(--main-background-color) etc
  // - [] Set it to an onlclick
  // - [] do a bunch of string interpolation
  return (
    <div className="navbar">
      <NavLink exact to="/keeps" title="Keepy">
        Keepy
      </NavLink>
      <button>Light and dark mode will go here</button>
      {isLoaded && <ProfileButton />}
    </div>
  );
}

export default Navigation;

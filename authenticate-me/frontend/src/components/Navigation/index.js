import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  return (
    <div className="navbar">
      <NavLink exact to="/keeps">
        Keepy
      </NavLink>
      {isLoaded && <ProfileButton />}
    </div>
  );
}

export default Navigation;

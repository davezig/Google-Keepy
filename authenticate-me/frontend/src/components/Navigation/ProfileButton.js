import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let dropdownMenu;
  let icon;
  if (sessionUser) {
    dropdownMenu = (
      <ul className="profile-dropdown">
        <li>{sessionUser.username}</li>
        <li>{sessionUser.email}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    );
    icon = <p>{sessionUser.username[0].toUpperCase()}</p>;
  } else {
    dropdownMenu = (
      <div>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
    icon = <i className="fas fa-user-circle" />;
  }

  return (
    <>
      <div onClick={openMenu}> {icon}</div>
      {showMenu && dropdownMenu}
    </>
  );
}

export default ProfileButton;

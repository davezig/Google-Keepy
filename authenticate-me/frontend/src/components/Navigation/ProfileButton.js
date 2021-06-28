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
      <>
        <p>{sessionUser.username}</p>
        <p>{sessionUser.email}</p>
        <p onClick={logout}>Log Out</p>
      </>
    );
    icon = <p>{sessionUser.username[0].toUpperCase()}</p>;
  } else {
    dropdownMenu = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
    icon = <i className="fas fa-user" />;
  }

  return (
    <>
      <div onClick={openMenu} className="profile-icon">
        {icon}
      </div>
      {showMenu && <div className="profile-dropdown">{dropdownMenu}</div>}
    </>
  );
}

export default ProfileButton;

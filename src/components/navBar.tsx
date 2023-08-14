import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className='navbar-nav mr-auto'>
      <NavLink
      to="/"
      className="nav-link">
        Home
      </NavLink>
      <NavLink
      to="/"
      className="nav-link">
        Profile
      </NavLink>
      <NavLink
      to="/"
      className="nav-link">
        External API
      </NavLink>
    </div>
  )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const {
  header,
  logo,
  links,
  active
} = style;
const Header = () => {
  return (
    <header className={header}>
      <NavLink exact to="/drinks" activeClassName={active} className={links}>Drinks</NavLink>
      <NavLink exact to="/about" activeClassName={active} className={links}>About Us</NavLink>
      <NavLink exact to="/" activeClassName={active} className={logo}>Bons Drinks</NavLink>
      <NavLink exact to="/team" activeClassName={active} className={links}>Our Team</NavLink>
      <NavLink exact to="/contact" activeClassName={active} className={links}>Contact Us</NavLink>
    </header>
  )
}

export default Header;
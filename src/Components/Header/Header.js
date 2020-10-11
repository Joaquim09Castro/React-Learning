import React, { Component } from 'react';
import style from './Header.module.css';

const {
  header,
  logo,
  links
} = style;
export default class Header extends Component {
  render() {
    return (
      <header className={header}>
        <a href="/drinks" className={links}>Drinks</a>
        <a href="/about" className={links}>About Us</a>
        <a href="/" className={logo}><b>Bons Drinks</b></a>
        <a href="/team" className={links}>Our Team</a>
        <a href="/contact" className={links}>Contact Us</a>
      </header>
    )
  }
}

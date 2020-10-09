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
        <a href="*" className={links}>Link 1</a>
        <a href="*" className={links}>Link 2</a>
        <a href="*" className={logo}><b>Bons Drinks</b></a>
        <a href="*" className={links}>Link 3</a>
        <a href="*" className={links}>Link 4</a>
    </header>
    )
  }
}

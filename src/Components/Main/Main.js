import React, { Component } from 'react';
import style from './Main.module.css';

export default class Main extends Component {
  render() {
    return (
      <main className={style.main}>
        {this.props.children.length > 1 ? 
          this.props.children.map(child => child) : this.props.children}
      </main>
    )
  }
}

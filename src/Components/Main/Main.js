import React, { Component } from 'react';
import { main } from './Main.module.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.styles = `${main} ${this.props.className}`;
  }
  
  render() {
    return (
      <main className={main + (' ' + this.props.className || '')}>
        {this.props.children.length > 1 ? 
          this.props.children.map(child => child) : this.props.children}
      </main>
    )
  }
}

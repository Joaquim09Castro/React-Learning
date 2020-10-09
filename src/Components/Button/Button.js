import React, { Component } from 'react';
import style from './Button.module.css';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    const text = document.getElementById('msg-input');
    console.log(text);
  }
  
  render() {
    return (
      <div className={style.button}>
        <button type={this.props.type || "button"} onClick={this.click}>{this.props.name}</button>
      </div>
    )
  }
}

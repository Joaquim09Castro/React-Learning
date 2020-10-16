import React, { Component } from 'react';
import style from './Button.module.css';

const {
  btnGrid,
  space,
  btn
} = style;

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    console.log('Button clicked');
  }
  
  render() {
    return (
      <div className={btnGrid}>
        
        <p className={space}></p>
        
        <button className={btn} type={this.props.type || "button"}onClick={this.props.onClick || this.click}>
          {this.props.name}
        </button>

      </div>
    )
  }
}
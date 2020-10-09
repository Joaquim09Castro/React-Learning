import React, { Component } from 'react';
import style from './Input.module.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.basic = "Input";
  }

  render() {
    return (
      //name-input
      <div className={ (this.props.id || this.basic) + ' ' + style.input}>
        <label htmlFor={this.props.id || this.basic}>{this.props.name || this.basic}:</label>
        <br />
        <input id={this.props.id || this.basic} placeholder={this.props.placeholder || this.props.name || this.basic} type={this.props.type}/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import style from './Input.module.css';

const {
  inputDiv,
  input,
  label
} = style;

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.basic = "Input-componet";

    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    if (!this.value) {
      alert(`Preencha o Campo ${this.props.name}`)
    }
  }

  render() {
    return (
      //name-input
      <div className={inputDiv} id={this.props.id || this.basic}>

        <label className={label} htmlFor={(this.props.id || this.basic) + ' input'}>
          {this.props.name || this.basic}:
        </label>

        <input 
          className={input}
          id={(this.props.id || this.basic) + ' input'}
          placeholder={this.props.placeholder || this.props.name || this.basic}
          type={this.props.type}
          onBlur={this.handleBlur}
        />

      </div>
    )
  }
}

import React, { Component } from 'react';
import style from './Form.module.css';


export default class Form extends Component {
  render() {
    return (  
        <form className={style.form}>
          {this.props.children.length > 1 ? 
          this.props.children.map(child => child) : this.props.children}
        </form>
    )
  }
}
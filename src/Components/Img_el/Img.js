import React, { Component } from 'react';
import style from './Img.module.css';

const { img } = style;

export default class Img extends Component {
  constructor(props) {
    super(props);
    this.basic = 'Image';
  }
  
  render() {
    return (
      <div className={img}>
        <img src={this.props.src} alt={this.props.alt || this.basic}/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Img from '../../Img_el/Img';
import Paragraph from '../../Paragraph/Paragraph';
import style from './Card.module.css';

const { 
  img,
  paragraph,
  card
} = style;

export default class Card extends Component {
  render() {
    return (
      <div className={card}>
        <Img src={this.props.img} alt="Drink" className={img}/>
        <Paragraph className={paragraph}>{this.props.name}</Paragraph>
      </div>
    )
  }
}

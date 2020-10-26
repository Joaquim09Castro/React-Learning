import React from 'react';
import Img from '../../Img_el/Img';
import Paragraph from '../../Paragraph/Paragraph';
import style from './Card.module.css';

const { 
  img,
  paragraph,
  card
} = style;

const Card = props => {
  const {
    name,
    img: srcImg,
    id
  } = props;
  return (
    <div className={card} key={id.toString()} id={id}>
      <Img src={srcImg} alt="Drink" className={img}/>
      <Paragraph className={paragraph}>{name}</Paragraph>
    </div>
  )
}

export default Card;
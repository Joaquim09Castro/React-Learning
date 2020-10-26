import React from 'react';
import style from './Img.module.css';

const { img } = style;

const Img = props => {

  const {
    className,
    src,
    alt
  } = props;

  return (
    <div >
      <img className={className + ' ' + img} src={src} alt={alt || this.basic}/>
    </div>
  )
}

export default Img;
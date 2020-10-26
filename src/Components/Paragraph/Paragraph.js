import React from 'react';
import style from './Paragraph.module.css';

const { paragraph } = style

const Paragraph = ({ children , ...props }) => {

  return (
    <p className={paragraph} {...props}>
      {children}
    </p>
  )
}

export default Paragraph;
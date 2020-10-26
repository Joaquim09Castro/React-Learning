import React from 'react';
import style from './CardList.module.css';

const { drinkList } = style;

const CardList = ({children , ...props}) => {
  
  return (
    <div className={drinkList} {...props}>
      {children}
    </div>
  )
}

export default CardList;
import React, { Component } from 'react';
import style from './CardList.module.css';

const { drinkList } = style;

export default class CardList extends Component {
  
  render() {
    return (
      <div className={drinkList} {...this.props}>
        {this.props.children}
      </div>
    )
  }
}

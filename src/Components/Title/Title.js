import React, { Component } from 'react'
import style from './Title.module.css';

const { title } = style;

export default class Title extends Component {
  constructor(props) {
    super(props)

    this.title = this.props.children || "Title";
  }
  
  render() {
    return (
      <>
        <h1 className={'title ' + title}>
          {this.title}
        </h1>
      </>
    )
  }
}

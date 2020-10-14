import React, { Component } from 'react'
import { title } from './Title.module.css';

export default class Title extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.children || "Title";
  }
  
  render() {
    return (
      <>
        <h1 className={title + (' ' + this.props.className || '')}>
          {this.title}
        </h1>
      </>
    )
  }
}

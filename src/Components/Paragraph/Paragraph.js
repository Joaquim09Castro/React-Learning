import React, { Component } from 'react';
import style from './Paragraph.module.css';

const { paragraph } = style

export default class Paragraph extends Component {
  constructor(props) {
    super(props);

    this.content = this.props.children || "This is a Paragraph";
  }
  
  render() {
    return (
        <p className={paragraph} {...this.props}>
          {this.content}
        </p>
    )
  }
}

import React, { Component } from 'react';
import style from './TextArea.module.css';

const {
  textArea, 
  label, 
  textAreaDiv } = style;

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.basic = "Text";
  }
  
  render() {
    return (
      <div className={(this.props.id || this.basic) + ` ${textAreaDiv}`}>

        <label className={label}>
          {this.props.name || this.basic}
        </label>
        <textarea
          className={textArea}
          id={this.props.id || this.basic}
          cols={this.props.cols || ""}
          rows={this.props.rows || ""}
        />

      </div>
    )
  }
}

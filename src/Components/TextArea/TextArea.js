import React, { Component } from 'react';
import style from './TextArea.module.css';

const { textArea } = style;

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.basic = "Text";
  }
  
  render() {
    return (
      <div className={ textArea + ' ' + (this.props.id || this.basic)}>
        <label>{this.props.name || this.basic}</label>
        <br />
        <textarea cols={this.props.cols || 50} rows={this.props.rows || 6} id={this.props.id || this.basic}/>
      </div>
    )
  }
}

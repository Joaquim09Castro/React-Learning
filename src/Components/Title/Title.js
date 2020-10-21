import React, { Component } from 'react'
import { title } from './Title.module.css';

export default class Title extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.children || "Title";

    //this.funcOver = this.funcOver.bind(this);

    // this.refPassa = ( elemento => {
    //   this.titulo = elemento;
    // })
  }

  // componentDidMount(){
  //   this.titulo.addEventListener('mouseover',this.funcOver)
  // }

  // componentWillUnmount(){
  //   this.titulo.removeEventListener('mouseover', this.funcOver)
  // }

  // funcOver() {
  //   const date = new Date();
  //   const time = `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }`

  //   console.log("passei " + this.title + '\n' + time)
  // }
  
  render() {
    return (
      <>
        <h1 ref={this.refPassa} className={title + (' ' + this.props.className || '')}>
          {this.title}
        </h1>
      </>
    )
  }
}

import React, { Component } from 'react';

import Main from '../Main/Main';
import Title from '../Title/Title';

import { home, title } from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <Main className={home}>
        <Title className={title}>Bons Drinks</Title>
      </Main>
    )
  }
}

import React from 'react';

import Main from '../Main/Main';
import Title from '../Title/Title';

import { home, title } from './Home.module.css';

const Home = () => {
  return (
    <Main className={home}>
      <Title className={title}>Bons Drinks</Title>
    </Main>
  )
}

export default Home;
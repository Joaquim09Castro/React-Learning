import React from 'react';
import { main } from './Main.module.css';

const Main = ({ children , className}) => {

  return (
    <main className={main + (' ' + className || '')}>
      {children.length > 1 ? 
        children.map(child => child) : children}
    </main>
  )
}

export default Main;
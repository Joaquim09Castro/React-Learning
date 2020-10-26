import React from 'react'
import { title } from './Title.module.css';

const Title = props => {

  const {
    className,
    children
  } = props;

  return (
    <>
      <h1 className={title + (' ' + className || '')}>
        {children}
      </h1>
    </>
  )
}

export default Title;
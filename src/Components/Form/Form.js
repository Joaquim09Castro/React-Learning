import React from 'react';
import style from './Form.module.css';


const Form = ({children}) => {
  return (
    <form className={style.form}>
      {children.length > 1 ? 
        children.map(child => child) : children }
    </form>
  )
}

export default Form;
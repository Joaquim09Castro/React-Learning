import React from 'react';
import style from './Button.module.css';

const {
  btnGrid,
  space,
  btn
} = style;

const Button = ( {...props} ) => {
  const [ count , setCount ] = React.useState( 1 )

  async function click() {
    console.log(count);
    setCount( count + 1 );
  }

  return (
    <div className={btnGrid}>
      
      <p className={space}></p>
      
      <button onClick={click} {...props} className={btn}>
        {props.name}
      </button>

    </div>
  )
}

export default Button;
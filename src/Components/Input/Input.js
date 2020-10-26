import React from 'react';
import style from './Input.module.css';

const {
  inputDiv,
  input,
  label
} = style;

const Input = props => {
  const basic = 'input-component';

  const {
    name,
    id,
    placeholder,
    type
  } = props;

  const handleBlur = (event) => {
    if (!event.target.value) {
      alert(`Preencha o Campo ${name}`)
    }
  }

  return (
    //name-input
    <div className={inputDiv} id={id || basic}>

      <label className={label} htmlFor={(id || basic) + ' input'}>
        {name || basic}:
      </label>

      <input 
        className={input}
        id={(id || basic) + ' input'}
        placeholder={placeholder || name || basic}
        type={type}
        onBlur={handleBlur}
      />

    </div>
  )
}

export default Input;
import React from 'react';
import style from './TextArea.module.css';

const {
  textArea, 
  label, 
  textAreaDiv } = style;

const TextArea = ({ name , id , ...props }) => {

  const basic = 'Text';

  return (
    <div className={( id || basic) + ` ${textAreaDiv}`}>

      <label className={label}>
        { name || basic}
      </label>
      <textarea
        className={textArea}
        {...props}
      />

    </div>
  )
}

export default TextArea;
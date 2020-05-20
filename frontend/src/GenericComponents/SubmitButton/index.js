import './style.css';
import React from 'react';

export default function SubmitButton({ text, submitFunction }) {
  return (
    <button
      type='submit'
      data-test='submit-button'
      className='submitButton'
      onClick={submitFunction}
    >
      {text}
    </button>
  );
}

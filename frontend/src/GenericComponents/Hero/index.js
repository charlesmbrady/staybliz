import './style.css';
import React from 'react';

export default function Hero({ mainItem, subItem }) {
  return (
    <div className='hero'>
      {mainItem}
      {subItem}
    </div>
  );
}

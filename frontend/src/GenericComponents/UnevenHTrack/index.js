import './style.css';
import React from 'react';

export default function UnevenHTrack({ items }) {
  return (
    <div className='unevenHtrack'>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className='unevenHtrack-item-container' key={i}>
            {item}
          </div>
        ))}
    </div>
  );
}

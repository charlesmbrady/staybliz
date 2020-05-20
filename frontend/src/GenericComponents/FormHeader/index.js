import './style.css';
import React from 'react';
import UnevenHTrack from '../UnevenHTrack';

export default function FormHeader({ title }) {
  const formTitle = <h2 className='formTitle'>{title}</h2>;
  const items = [formTitle];
  return <UnevenHTrack className='formHeader' items={items} />;
}

import './style.css';
import React from 'react';
import { FaGrinAlt } from 'react-icons/fa';

export default function ProjectCard({ item }) {
  return (
    <div className='projectCard'>
      <h5 className='projectCardHeader'>{item.name}</h5>
      <FaGrinAlt className='projectCardIcon' />
      <p className='projectCardOther'># Tests Automated: 20/30</p>
    </div>
  );
}

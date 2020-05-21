import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGrinAlt } from 'react-icons/fa';
import { DataContext } from '../../../../../Contexts/DataContext';

export default function ProjectCard({ data }) {
  return (
    <div className='projectCard'>
      {data.name}
      {/* <h5 className='projectCardHeader'>
          {data.name} + {data.id}
        </h5>
        <FaGrinAlt className='projectCardIcon' />
        <p className='projectCardOther'># Tests Automated: 20/30</p> */}
    </div>
  );
}

import './style.css';
import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import logo from '../../assets/logo.png';

export default function Toolbar() {
  const { global, setGlobal } = useContext(GlobalContext);

  const createProjectButton = (
    <Link
      className='toolbarLink'
      data-test='createProject-button'
      to='/projects/new'
    >
      New Project
    </Link>
  );
  const createTest = (
    <Link
      className='toolbarLink'
      data-test='createTest-button'
      to={`/projects/${global.project.id}/tests/new`}
    >
      Add Test
    </Link>
  );

  const items = [createTest, createProjectButton];

  return (
    <div className='toolbar'>
      <div>{/* maybe put something here */}</div>

      {items.map((item, i) => (
        <div className='toolbarItem'>{item}</div>
      ))}
    </div>
  );
}

import './style.css';
import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import logo from '../../assets/logo.png';

export default function NavBar() {
  const { global, setGlobal } = useContext(GlobalContext);

  return (
    <div className='navBar'>
      <Link className='navBarItem' to={`/projects/${global.project.id}`}>
        Details
      </Link>
      <Link className='navBarItem' to={`/projects/${global.project.id}/tests`}>
        Tests
      </Link>
    </div>
  );
}

import './style.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import { TiThMenu } from 'react-icons/ti';

export default function LeftDrawer({ className }) {
  const { global, setGlobal } = useContext(GlobalContext);

  const toggleLeftDrawer = () => {
    setGlobal({ ...global, leftDrawerOpen: !global.leftDrawerOpen });
  };

  return (
    <div className={`${className} left-track`}>
      <div className='menuIconContainer'>
        <TiThMenu className='menuIcon' onClick={() => toggleLeftDrawer()} />
        {global.leftDrawerOpen && (
          <div className='list'>
            <li>Authentication</li>
            <li>one</li>
            <li>one</li>
          </div>
        )}
      </div>
    </div>
  );
}

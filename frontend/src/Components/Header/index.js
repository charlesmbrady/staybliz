import './style.css';
import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import API from '../../Utilities/API';
import logo from '../../assets/logo.png';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    API.logout().then(() => {
      setUser({ ...user, isAuthenticated: false, isCreated: false });
    });
  };

  const login = (
    <Link className='navLink' data-test='login-navlink' to='/login'>
      Login
    </Link>
  );
  const register = (
    <Link className='navLink' data-test='register-navlink' to='/register'>
      Register
    </Link>
  );
  const dashboard = (
    <Link className='navLink' to='/dashboard'>
      Dashboard
    </Link>
  );
  const logoutButton = (
    <button
      className='navLink logoutButton'
      data-test='logout-button'
      onClick={() => logout()}
    >
      Logout
    </button>
  );

  const authenticatedItems = [dashboard, logoutButton];
  const notAuthenticatedItems = [login, register];

  const items = user.isAuthenticated
    ? authenticatedItems
    : notAuthenticatedItems;

  useEffect(() => {}, [user.isAuthenticated]);
  return (
    <div className='navTrack'>
      <Link className='logoContainer' to='/'>
        <img src={logo} className='logo' alt='' />
      </Link>

      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className='navTrackItemContainer' key={i}>
            <li className='navTrackItem'>{item}</li>
          </div>
        ))}
    </div>
  );
}

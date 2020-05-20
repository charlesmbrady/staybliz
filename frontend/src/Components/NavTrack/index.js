import style from './style.css';
import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import API from '../../Utilities/API';
import logo from '../../assets/logo.png';

export default function NavTrack() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    API.logout().then(() => {
      setUser({ ...user, isAuthenticated: false, isCreated: false });
    });
  };

  const login = (
    <Link className={style.navLink} data-test='login-navlink' to='/login'>
      Login
    </Link>
  );
  const register = (
    <Link className={style.navLink} data-test='register-navlink' to='/register'>
      Register
    </Link>
  );
  const dashboard = (
    <Link className={style.navLink} to='/dashboard'>
      Dashboard
    </Link>
  );
  const logoutButton = (
    <button
      className={style.navLink}
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

  // if (!user.isAuthenticated) {
  //   return <Redirect to='/' />;
  // }

  return (
    <div className={style.track}>
      <Link className={style.logoContainer} to='/'>
        <img src={logo} className={style.logo} alt='' />
      </Link>

      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className={style.trackItemContainer} key={i}>
            <li className={style.trackItem}>{item}</li>
          </div>
        ))}
    </div>
  );
}

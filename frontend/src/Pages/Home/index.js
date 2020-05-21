import './style.css';
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { GlobalContext } from '../../Contexts/GlobalContext';
import API from '../../Utilities/API';
import Hero from '../../GenericComponents/Hero';
import Form from '../../GenericComponents/Form';
import FieldGroup from '../../GenericComponents/FieldGroup';
import FormFooter from '../../GenericComponents/FormFooter';
import SubmitButton from '../../GenericComponents/SubmitButton';
import LeftDrawer from '../../Components/LeftDrawer';
import RightDrawer from '../../Components/RightDrawer';

export default function Home() {
  const { global, setGlobal } = useContext(GlobalContext);
  const leftDrawerOpen = global.leftDrawerOpen;

  const mainItem = <h1 className='heroHeader'>Say goodbye to bugs.</h1>;
  const subItem = <p className='subItem'>Or rather, never say "hello"</p>;

  const infoLine = (
    <p className='infoLine'>
      Assure <span className='quality'>Quality</span> and{' '}
      <span className='stability'>Stability</span> with your new favorite Test
      Case Management tool
    </p>
  );
  const getStartedButton = (
    <Link
      className='getStartedButton'
      to='/login'
      data-test='get-started-button'
    >
      Get Started
    </Link>
  );

  const jumboOne = <Hero mainItem={mainItem} subItem={subItem} />;
  const jumboTwo = (
    <Hero className='jumboTwo' mainItem={infoLine} subItem={getStartedButton} />
  );
  return (
    <div
      className={
        leftDrawerOpen ? 'homeGridContainerLeftDrawerOpen' : 'homeGridContainer'
      }
    >
      <LeftDrawer className='homeLeftDrawer' />
      <div className='homeContentContainer'>
        {/* <hr className={style.divide} /> */}
        <div className='heroContainer'>
          {jumboOne}
          <hr className='divide' />
          {jumboTwo}
        </div>
      </div>
      <RightDrawer className='homeRightDrawer' />
    </div>
  );
}

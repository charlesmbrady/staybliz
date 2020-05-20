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
import Toolbar from '../../GenericComponents/UnevenHTrack';
import RightDrawer from '../../Components/RightDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Dashboard() {
  const { global, setGlobal } = useContext(GlobalContext);
  const leftDrawerOpen = global.leftDrawerOpen;

  const newProjectButton = <button>New porject</button>;
  const projectToolbarItems = [newProjectButton];

  return (
    <div
      className={
        leftDrawerOpen
          ? 'dashboardGridContainerLeftDrawerOpen'
          : 'dashboardGridContainer'
      }
    >
      <LeftDrawer className='leftDrawer' />
      <div className='dashboardContentContainer'>
        <Toolbar id='oolbar' className='' items={projectToolbarItems} />
        {/* <Switch>
          <Route path='/login' component={Login} />

          <Route path='/' component={Home} />
        </Switch> */}
      </div>
      <RightDrawer className='rightDrawer' />
    </div>
  );
}

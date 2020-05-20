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
import UnevenHTrack from '../../GenericComponents/UnevenHTrack';
import RightDrawer from '../../Components/RightDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AiFillFolderAdd } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { GrChapterAdd } from 'react-icons/gr';

import ProjectsList from './components/ProjectsList';

export default function Dashboard() {
  const { global, setGlobal } = useContext(GlobalContext);
  const leftDrawerOpen = global.leftDrawerOpen;

  const title = <h3 className='dashboard-header'>Projects</h3>;
  const newProjectButton = <AiFillFolderAdd className='toolbarIcon' />;
  const newTestButton = <MdPlaylistAdd className='toolbarIcon' />;
  const newFeatureButton = <GrChapterAdd className='toolbarIcon' />;
  const projectToolbarItems = [
    title,
    newTestButton,
    newFeatureButton,
    newProjectButton,
  ];

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
        <UnevenHTrack
          className='dashboardToolbar'
          items={projectToolbarItems}
        />
        {/* make component for ProjectsList, and the Project itself/ if path matches /projects get all, if /project/id display project */}

        {/* Make component for TestsList that just goes under the project details, make component for Test that also just renders */}

        {/* if the path matches todos, render t*/}
        <Switch>
          {/* <Route path='/login' component={Login} /> */}

          <Route exact path='/dashboard' component={ProjectsList} />
        </Switch>
      </div>
      <RightDrawer className='rightDrawer' />
    </div>
  );
}

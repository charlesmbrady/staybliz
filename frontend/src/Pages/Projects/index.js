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
import Project from '../Project/index';
import { GrChapterAdd } from 'react-icons/gr';

import ProjectsList from './components/ProjectsList';
import Toolbar from '../../Components/Toolbar';

export default function Projects() {
  const { global, setGlobal } = useContext(GlobalContext);

  return (
    <div className='projects'>
      <Toolbar />

      <ProjectsList />
    </div>
  );
}

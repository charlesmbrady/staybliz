import style from './style.css';
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

export default function Dashboard() {
  const { global, setGlobal } = useContext(GlobalContext);
  const leftDrawerOpen = global.leftDrawerOpen;

  return (
    <div
      className={
        leftDrawerOpen ? style.gridContainerLeftDrawerOpen : style.gridContainer
      }
    >
      <LeftDrawer className={style.leftDrawer} />
      <div className={style.contentContainer}></div>
      <RightDrawer className={style.rightDrawer} />
    </div>
  );
}

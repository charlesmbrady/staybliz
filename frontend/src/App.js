import React, { useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';
import { DataContext } from './Contexts/DataContext';
import { FormValuesContext } from './Contexts/FormValuesContext';
import { FormErrorsContext } from './Contexts/FormErrorsContext';
import API from './Utilities/API';

//********** Pages/Components **********//
import Mask from './GenericComponents/Mask';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Project from './Pages/Project';
import NewProject from './Pages/NewProject';
import Tests from './Pages/Tests';
import Test from './Pages/Test';
import NewTest from './Pages/NewTest';

export default function App() {
  // Set UserContext provider values
  const [user, setUser] = useState({
    isAuthenticated: false,
    isCreated: false,
    firstName: null,
    lastName: null,
    email: null,
  });
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Set GlobalContext provider values
  const [global, setGlobal] = useState({
    isSubmitting: false,
    isLoading: false,
    project: {
      id: null,
      name: '',
      todos: [],
    },
  });
  const globalValue = useMemo(() => ({ global, setGlobal }), [
    global,
    setGlobal,
  ]);

  const [data, setData] = useState([]);
  const dataValue = useMemo(() => ({ data, setData }), [data, setData]);

  // Set FormValuesContext provider values
  const [formValues, setFormValues] = useState({
    // All field names go here
    firstName: null,
    projectName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  });
  const formValuesValue = useMemo(() => ({ formValues, setFormValues }), [
    formValues,
    setFormValues,
  ]);

  // Set FormErrorsContext provider values
  const [formErrors, setFormErrors] = useState({});
  const formErrorsValue = useMemo(() => ({ formErrors, setFormErrors }), [
    formErrors,
    setFormErrors,
  ]);

  // let mask;
  // if (global.isLoading) {
  //   mask = <Mask />;
  // }

  // If user already logged in, redirect them to dashboard
  useEffect(() => {
    // const [data] = useApi(API.checkToken);
    // if (data) {
    //   console.log('data ' + data);
    //   // setGlobal(isLoading)
    // }
    API.checkToken().then((res) => {
      if (res.data.firstName) {
        setUser({ ...user, isAuthenticated: true });
      } else {
        API.logout().then(() => {
          setUser({ ...user, isAuthenticated: false, isCreated: false });
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   API.getAllProjects().then((res) => {
  //     console.log('the res' + res);
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <FormValuesContext.Provider value={formValuesValue}>
          <FormErrorsContext.Provider value={formErrorsValue}>
            <DataContext.Provider value={dataValue}>
              <Router>
                <div className='main-container'>
                  {global.isLoading && <Mask />}
                  {user.isAuthenticated && <Redirect to='/projects' />}
                  <Header />
                  <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute
                      exact
                      path='/dashboard'
                      component={Dashboard}
                    />
                    <PrivateRoute path='/projects/new'>
                      <NewProject />
                    </PrivateRoute>
                    <PrivateRoute path='/projects/:id/tests/new'>
                      <NewTest />
                    </PrivateRoute>
                    <PrivateRoute exact path='/projects'>
                      <Projects />
                    </PrivateRoute>
                    <PrivateRoute exact path='/projects/:id'>
                      <Project />
                    </PrivateRoute>
                    <PrivateRoute exact path='/projects/:id/tests'>
                      <Tests />
                    </PrivateRoute>
                    <PrivateRoute exact path='/projects/:id/tests/:id'>
                      <Test />
                    </PrivateRoute>

                    <Route path='/' component={Home} />
                  </Switch>
                </div>
              </Router>
            </DataContext.Provider>
          </FormErrorsContext.Provider>
        </FormValuesContext.Provider>
      </GlobalContext.Provider>
    </UserContext.Provider>
  );
}

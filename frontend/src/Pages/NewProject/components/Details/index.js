import './style.css';
import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../../../Contexts/UserContext';

//Form Components
import Form from '../../../../GenericComponents/Form';
import FormFooter from '../../../../GenericComponents/FormFooter';
import SubmitButton from '../../../../GenericComponents/SubmitButton';
import FieldGroup from '../../../../GenericComponents/FieldGroup';

export default function Details() {
  const { user } = useContext(UserContext);

  const fieldGroups = [
    <FieldGroup
      type='text'
      label='Name'
      name='projectName'
      placeholder='Enter new project name'
    />,
  ];

  const formFooterItems = [<SubmitButton text='Submit' />];

  const footer = <FormFooter formFooterItems={formFooterItems} />;

  return (
    <div className='newProjectForm'>
      <Form
        title='Create New Project'
        submitFunction='createProject'
        fieldGroups={fieldGroups}
        footer={footer}
      />
    </div>
  );
}

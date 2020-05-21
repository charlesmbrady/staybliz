import './style.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import API from '../../../../Utilities/API';
import { DataContext } from '../../../../Contexts/DataContext';

export default function ProjectsList() {
  // const [projects, setProjects] = useState([]);
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    API.getAllProjects().then((res) => {
      console.log('the res' + res);
      setData(res.data);
    });
  }, []);

  return (
    <div className='projectsList'>
      {data.map((project, i) => (
        <div>
          <Link
            to={`/projects/${project.id}`}
            data-test={`project-card-${project.id}`}
          >
            <ProjectCard data={project} key={i} />
          </Link>
        </div>
      ))}
    </div>
  );
}

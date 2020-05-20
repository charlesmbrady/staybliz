import './style.css';
import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  const projects = [
    {
      name: 'stabilyzr',
      testCount: 10,
    },
    {
      name: 'stabilyzr',
      testCount: 10,
    },
    {
      name: 'stabilyzr',
      testCount: 10,
    },
  ];
  return (
    <div className='projectsList'>
      {projects.map((project, i) => {
        <ProjectCard item={project} key={i} />;
      })}
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
      <ProjectCard item={projects[0]} />
    </div>
  );
}

import React from 'react';
import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className='projects'>
        <h2>loading...</h2>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { image, id, url, title } = project;
          return (
            <a
              href={url}
              key={id}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <h5>{title}</h5>
              <img src={image} alt={title} className='img' />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

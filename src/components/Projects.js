import React from 'react';
import Project from './Project';
import './Projects.css';

const projectData = [
  {
    title: 'Daily Grace Quote Email',
    description: 'Pulls the "Quote of the Day" from a quote website and sends it to my email.',
    link: 'https://github.com/RyanSmith19/DailyGraceQuote'
  },
  {
    title: 'Carpool Organizing Script',
    description: 'Algorithm that takes in a list of riders and drivers and organizes carpools to streamline process.',
    link: 'https://github.com/RyanSmith19/BereanCarpoolRidesOrganizer'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

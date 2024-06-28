import React from 'react';
import './Project.css';

const Project = ({ title, description, link }) => {
  return (
    <div className="project-square">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default Project;

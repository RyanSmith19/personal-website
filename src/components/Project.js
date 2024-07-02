import React from 'react';
import './Project.css';

const Project = ({ title, description, keyFeatures, githubLink, projectLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {keyFeatures && (
        <ul className="key-features">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {projectLink && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fas fa-external-link-alt"></i> View Project
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;

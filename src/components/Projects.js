import React from 'react';
import Project from './Project';
import './Projects.css';

const projectData = [
  {
    title: "Figg's Window Cleaning Website",
    description: "Developed a professional website for a local window cleaning business, Figg's Window Cleaning. The site features a clean and responsive design, highlighting the company's services, team, and contact information.",
    keyFeatures: [
      'Responsive design ensuring optimal viewing on all devices',
      'Detailed service descriptions',
      'Clear contact information for easy appointment scheduling',
    ],
    githubLink: 'https://github.com/RyanSmith19/figg-window-cleaning',
    projectLink: 'https://figgwindowcleaning.rf.gd'
  },
  {
    title: 'Xperi Splunk Dashboards',
    description: 'Developed a suite of Splunk Dashboards for Xperi to help data analysts understand customer behavior with their cloud nDVR service.',
    keyFeatures: [
      'AWS EC2 architecture for scalable deployment',
      'Specialized queries for user pattern analysis',
      'Creation of Splunk SPL reports',
      'Development of comprehensive Splunk Dashboards',
    ],
  },
  {
    title: 'Daily Quote Email',
    description: 'Automates the process of fetching and sending a daily inspirational quote from GraceQuotes.org to your email.',
    keyFeatures: [
      'Fetches daily quote from GraceQuotes.org',
      'Extracts and decodes the quote and author',
      'Sends the quote via email',
      'Automated daily trigger'
    ],
    githubLink: 'https://github.com/RyanSmith19/DailyGraceQuote',
  },
  {
    title: 'Carpool Organizing Script',
    description: 'Automates the organization of carpools using Google Sheets. Matches drivers and riders based on availability, location, and preferences. Outputs results into organized sheets for easy management.',
    keyFeatures: [
      'Matches drivers with riders',
      'Handles unmatched riders',
      'Updates in real-time via Google Form submissions'
    ],
    githubLink: 'https://github.com/RyanSmith19/BereanCarpoolRidesOrganizer',
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
            keyFeatures={project.keyFeatures}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

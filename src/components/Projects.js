import React from 'react';
import Project from './Project';
import './Projects.css';

const projectData = [
  {
    title: "Figg's Window Cleaning Website",
    description: "Developed a professional website using React for a local window cleaning business, Figg's Window Cleaning. The site features a clean and responsive design, highlighting the company's services, team, and contact information.",
    keyFeatures: [
      'Responsive design ensuring optimal viewing on all devices',
      'Clean design',
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
  {
    "title": "Audio and Visual Technician at Berean Bible Church Arroyo Grande",
    "description": "Voluntarily served as an AV technician at a local church, responsible for ensuring high-quality audio and visual experiences during services. This role includes setting up and tearing down wiring, microphones, and speakers, adjusting cameras and audio boards, and recording services for online listeners.",
    "keyFeatures": [
      "Proficient in multimedia streaming technologies",
      "Skilled in troubleshooting and resolving technical issues in real-time",
      "Experience with recording and uploading content to cloud services"
    ],
    projectLink: 'https://bereanbibleag.com/'
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

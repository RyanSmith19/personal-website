import React from 'react';
import './About.css';

// Function to calculate age
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About = () => {
  const birthdate = '2001-12-19'; // Your birthdate
  const age = calculateAge(birthdate); // Calculate age

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a {age} year old Software Engineer currently seeking full-time employment. I graduated from Cal Poly with a B.S. in Software Engineering, June of 2024.</p>
      <hr className="divider" />
      <a href="https://drive.google.com/file/d/1vIPpD3jma_Bk4dXFg2N3yMRZYDPuPBAb/view" target="_blank" className="resume-link" rel="noreferrer">
        View Resume
      </a>
    </section>
  );
};

export default About;

import React from 'react';
import './About.css';

const About = () => {
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

  const birthdate = '2001-12-19'; // Your birthdate
  const age = calculateAge(birthdate); 

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Ryan Smith</h1>
          {/* <h2>Software Engineer</h2> */}
        </div>
      </header>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>I am a {age} year old Software Engineer currently seeking full-time employment. I graduated from Cal Poly with a B.S. in Software Engineering, June of 2024. With a strong foundation in software development and a passion for creating innovative solutions, I am eager to bring my skills and enthusiasm to a dynamic team.</p>
        <a href="https://drive.google.com/file/d/1vIPpD3jma_Bk4dXFg2N3yMRZYDPuPBAb/view" target="_blank" className="resume-link" rel="noreferrer">
          View Resume
        </a>
      </section>
    </>
  );
};

export default About;

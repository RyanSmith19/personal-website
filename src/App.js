import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'; 
import Languages from './components/Languages';

const App = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/background.jpg`;
  
  return (
    <div 
      className="App"
      style={{ 
        background: `url(${backgroundImage}) no-repeat center center fixed`, 
        backgroundSize: 'cover' 
      }}
    >
      <About />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
};

export default App;

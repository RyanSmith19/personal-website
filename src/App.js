import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'; 
import Languages from './components/Languages';

const App = () => {
  return (
    <div className="App">
      <About />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
};

export default App;

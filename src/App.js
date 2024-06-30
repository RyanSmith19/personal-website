import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'; 
import Languages from './components/Languages';

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <About />
      <Projects />
      <Languages />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'; 
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
};

export default App;

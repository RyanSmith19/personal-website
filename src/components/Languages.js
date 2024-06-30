import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C',
    'C#',
    'PHP',
    'MySQL',
    'Racket'
  ];

  return (
    <section id="languages" className="languages">
      <h2>Programming Languages</h2>
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            {language}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

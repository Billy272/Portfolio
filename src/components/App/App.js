import React from 'react';
import './App.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header name="Bill Bitok" proffesion="Front-End Developer and Data Scientist." />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import Header from '../Header/Header';
import Me from '../Me/Me';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Me name="Bill Bitok" profession="Junior Data Analyst and Front-end developer." />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

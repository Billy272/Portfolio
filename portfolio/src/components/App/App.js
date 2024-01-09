import './App.css';
import Header from '../Header/Header';
import Me from '../Me/Me';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header name="Bill Bitok" profession="React Junior Developer" />
      <Me />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

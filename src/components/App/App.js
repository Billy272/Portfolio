import './App.css';
import About from '../About/About'

function App() {
  return (
    <div>
      <div className="container">
        <h1>Bill's Portfolio.</h1>
        <ul>
          <li>Home</li>
          <li><About title="About"/></li>
          <li>Github</li>
        </ul>
      </div>
      <div className='body'>

      </div>
    </div>
  );
}

export default App;

import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Quote from './pages/quote';
import Home from './pages/home';
import Calculator from './pages/calculator';

function App() {
  return (
    <>
      <nav className="nav">
        <div>
          <h1>Math magicians</h1>
        </div>
        <ul className="ul">
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li className="li">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="li">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

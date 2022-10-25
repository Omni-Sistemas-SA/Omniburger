import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar.js'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;

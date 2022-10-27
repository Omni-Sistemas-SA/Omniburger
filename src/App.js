import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar.js'
import Inicio from './components/pages/Inicio.js'
import Perfil from './components/pages/Perfil.js'
import Footer from './components/footer/Footer.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/perfil' element={<Perfil />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

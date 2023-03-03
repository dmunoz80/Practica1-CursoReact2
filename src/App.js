import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNav from './components/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

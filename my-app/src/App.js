import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div >
        <Routes>
       
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

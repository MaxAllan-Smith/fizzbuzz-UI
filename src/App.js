import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/homepage/homepage'
import About from './components/aboutpage/aboutpage'
import Contact from './components/contactpage/contactpage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </header>
      <body>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </Router>
      </body>
    </div>
  );
}

export default App;

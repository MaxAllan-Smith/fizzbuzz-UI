import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/homepage/homepage";
import About from "./components/aboutpage/aboutpage";
import Contact from "./components/contactpage/contactpage";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

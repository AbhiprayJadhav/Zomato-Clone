import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Navbar from './pages/Navbar';  // Static Navbar component
import HeroSection from './pages/HeroSection';
import Home1 from './components/Home1';
import Footer from './pages/Footer';  // Static Footer component
import './App.css';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter wraps the entire app */}
      <BrowserRouter>
        {/* Navbar stays static at the top of all pages */}
        <Navbar />

        {/* Define the dynamic content with Routes */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/*" element={<Pagenotfound />} />
          <Route path="/herosection" element={<HeroSection />} />
        </Routes>

        {/* Footer stays static at the bottom of all pages */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


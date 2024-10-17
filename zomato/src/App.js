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
import RestaurantCard from './pages/RestaurantCard';
import RestaurantDetail from './pages/RestaurantDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />  {/* Navbar is static and will appear on all pages */}
        
        <Routes>
          <Route path="/" element={<Home1 />} />  {/* Home Page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/restaurants" element={<RestaurantCard />} /> {/* Restaurant listing */}
          <Route path="/restaurant/:id" element={<RestaurantDetail />} /> {/* Restaurant detail by ID */}
          <Route path="*" element={<Pagenotfound />} />  {/* Catch-all route for 404 */}
        </Routes>
        
        <Footer />  {/* Footer is static and will appear on all pages */}
      </BrowserRouter>
    </div>
  );
}

export default App;

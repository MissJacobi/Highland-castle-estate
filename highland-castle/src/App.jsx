import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import Suites from './pages/Suites.jsx';
import Weddings from './pages/Weddings.jsx';
import About from './pages/About.jsx';
import { NavLink } from 'react-router-dom';
import ContactUs from './components/ContactUs.jsx';
import { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className='page-border'>
        <nav className='navbar'>
          <div className='logo'>
            <Link to="/">
            <img src='/images/logo.png' alt='Highland Castle Logo'></img>
            </Link>
          </div>
          <div className='nav-links'>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/suites">SUITES</NavLink>
            <NavLink to="/weddings">WEDDINGS</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/booking">BOOKING</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/suites' element={<Suites />} />
          <Route path='/weddings' element={<Weddings openContact={() => setIsContactOpen(true)} />} />
          <Route path='about' element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>

        <ContactUs isOpen={isContactOpen} setIsOpen={setIsContactOpen}/>
      </div>
    </Router>
  )
}

export default App;
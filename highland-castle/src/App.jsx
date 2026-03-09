import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import { NavLink } from 'react-router-dom';

function App() {
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
            <NavLink border to="/">HOME</NavLink>
            <NavLink to="/suites">SUITES</NavLink>
            <NavLink to="/weddings">WEDDINGS</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/booking">BOOKING</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';

function App() {
  return (
    <Router>
      <div className='page-border'>
        <nav className='navbar'>
          <div className='logo'>
            <h2 style={{ fontFamily: 'var(--header-font)', color: 'var(--deep-forest-green)', margin: 0 }}>
            </h2>
          </div>
          <div className='nav-links'>
            <Link to="/">HOME</Link>
            <Link to="/suites">SUITES</Link>
            <Link to="/weddings">WEDDINGS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/booking">BOOKING</Link>
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
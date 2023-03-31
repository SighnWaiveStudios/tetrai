import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './module.css';
export default function Navigation() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname != "/" && <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/contact">Contact Us</Link>
      </div>}
    </>
  );
}

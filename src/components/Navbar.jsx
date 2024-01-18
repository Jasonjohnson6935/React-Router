import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="navbar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
      <Link to="/"style={{ marginRight: '30px' }}>Home</Link>
      <Link to="/blue" style={{ marginRight: '30px' }}>Blue</Link>
      <Link to="/red">Red</Link>
        </div>
  );
}

export default Navbar;
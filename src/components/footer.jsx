import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
      <Link to="/"style={{ marginRight: '30px' }}>Home</Link>
      <Link to="/blue" style={{ marginRight: '30px' }}>Blue</Link>
      <Link to="/red">Red</Link>
    </div>
  );
}

export default Footer;
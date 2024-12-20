import React from 'react';

function Navbar() {
  return (
    <nav style={{ background: '#028900', color: '#fff', padding: '10px 20px' }}>
      <h1>Agriplast</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0 }}>
        <li><a href="#products" style={{ color: '#fff', textDecoration: 'none' }}>Products</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

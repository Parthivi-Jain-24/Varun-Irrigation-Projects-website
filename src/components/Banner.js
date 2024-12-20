import React from 'react';

function Banner() {
  return (
    <div style={{
      backgroundImage: 'url("https://via.placeholder.com/1200x400")',
      backgroundSize: 'cover',
      height: '400px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Welcome to Agriplast</h1>
    </div>
  );
}

export default Banner;

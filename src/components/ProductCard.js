import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'center',
      width: '200px',
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;

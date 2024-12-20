import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { name: 'Mulching Films', description: 'High-quality mulching films for agriculture.', image: '/assets/images/product1.jpg' },
  { name: 'Greenhouse Covers', description: 'Durable covers for greenhouses.', image: '/assets/images/product2.jpg' },
];

function Products() {
  return (
    <div id="products" style={{ padding: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;

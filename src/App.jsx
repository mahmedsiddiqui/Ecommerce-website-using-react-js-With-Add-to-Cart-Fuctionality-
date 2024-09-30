import React, { useState, useEffect } from 'react';
import './App.css';  // add some basic CSS later
import Navbar from './Navbar';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  const delToCart = () => {
    setCartCount(cartCount - 1);
    if (cartCount < 1) {
        setCartCount(0)
    } 
  };

  return (
    <div className="App">
      <Navbar cartCount={cartCount}  />
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} delToCart={delToCart}/>
        ))}
      </div>
    </div>
  );
}

export default App;

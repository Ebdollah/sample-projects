import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      <div className="mb-4 p-4 border rounded bg-gray-100">
        <h2 className="text-xl font-bold">Cart Summary</h2>
        <p className="text-gray-700">You have {cart.length} item(s) in your cart.</p>
        <button 
          onClick={() => navigate('/cart')} 
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          View Cart
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover mb-4" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button 
              onClick={() => handleClick(product.id)} 
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

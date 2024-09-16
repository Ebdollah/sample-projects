import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    console.log('Product added to cart:', product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover mb-4 md:mb-0 md:w-1/2" />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button 
            onClick={handleAddToCart} 
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add to Cart
          </button>
          {addedToCart && <p className="text-green-500 mt-2">Added to cart!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

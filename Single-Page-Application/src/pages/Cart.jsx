import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id} className="border p-4 rounded mb-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)} 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  +
                </button>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  -
                </button>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</h2>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

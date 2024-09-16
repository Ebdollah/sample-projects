import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Adjust the path to your CartContext file as necessary
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const { cart, calculateTotalPrice, clearCart } = useCart(); // Ensure calculateTotalPrice and clearCart are exported from CartContext
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && !validateShippingInfo(shippingInfo)) {
      alert('Please fill all the shipping information correctly.');
      return;
    }
    if (step === 2 && !validatePaymentInfo(paymentInfo)) {
      alert('Please fill all the payment details correctly.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleConfirmOrder = () => {
    // Here you can handle the order processing logic
    clearCart();
    navigate('/thank-you'); // Make sure the route is set in your router configuration
  };

  // Example validation functions
  const validateShippingInfo = (info) => {
    return info.name && info.address && info.city && info.postalCode;
  };

  const validatePaymentInfo = (info) => {
    return info.cardNumber && info.expirationDate && info.cvv;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
          <form>
            <input type="text" placeholder="Full Name" className="border p-2 mb-2 w-full" onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })} />
            <input type="text" placeholder="Address" className="border p-2 mb-2 w-full" onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
            <input type="text" placeholder="City" className="border p-2 mb-2 w-full" onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
            <input type="text" placeholder="Postal Code" className="border p-2 mb-2 w-full" onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })} />
            <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Payment Details</h2>
          <form>
            <input type="text" placeholder="Card Number" className="border p-2 mb-2 w-full" onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} />
            <input type="text" placeholder="Expiration Date" className="border p-2 mb-2 w-full" onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationDate: e.target.value })} />
            <input type="text" placeholder="CVV" className="border p-2 mb-2 w-full" onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} />
            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-600 text-white rounded">Previous</button>
              <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
            </div>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Order Confirmation</h2>
          <p>Name: {shippingInfo.name}</p>
          <p>Address: {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}</p>
          <p>Card Number: {paymentInfo.cardNumber}</p>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-600 text-white rounded">Previous</button>
            <button type="button" onClick={handleConfirmOrder} className="px-4 py-2 bg-green-600 text-white rounded">Confirm Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

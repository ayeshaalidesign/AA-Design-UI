// Invoice.js
import React, { useState, useEffect } from 'react';
import AppLoader from '../loader/AppLoader';

const PaymentSuccessful = () => {
  const [cartItems, setCartItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [data,setData] = useState([]);

  useEffect(() => {
    localStorage.clear();
    const fetchProducts = async () => {
      setLoad(true);

      try {
        const orderId = sessionStorage.getItem('orderId');

        if (!orderId) {
          console.error('Order ID is missing in sessionStorage');
          setLoad(false);
          return;
        }

        const response = await fetch(
          `https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/Order/invoice/${orderId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0 && data[0] && Array.isArray(data[0].products)) {
          setCartItems(data[0].products);
          setData(data[0]);
        } else {
          console.warn('Data is not in the expected format or products not found');
          setCartItems([]);
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setCartItems([]);
        setData([]);
      } finally {
        setLoad(false);
      }
    };

    fetchProducts();
  }, []);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-lg font-semibold'>No Product...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg">
    {load ? <AppLoader /> : (
      <>
       <h1 className="text-xl font-bold mb-4">Your order is confirmed and your order id is {data.orderId}</h1>
      <div className="overflow-x-auto">

      <div className="flex justify-between font-sm text-md pt-2">
          <span>Shipping Address : {data.address}</span>
        </div>

        <div className='border border-1 mt-2'></div>

        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center py-4">
              <img 
                src={item.productImageUrl} 
                alt={item.productName} 
                className="max-w-[80px] rounded-md" 
              />
              <div className="flex-1 text-left ml-4">
                <h2 className="text-sm font-semibold underline">{item.productName}</h2>
                <p className="text-gray-700 text-sm">Size: {item.productSizes}</p>
                <p className="text-gray-700 text-sm">
                  ${(item.productPrice).toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">
                 ${(item.productPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}

        <div className='border border-1'></div>

        <div className="flex justify-between font-semibold text-md pt-2">
          <span>Total Amount</span>
          <span>${(data.totalPrice).toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-md pt-2">
          <span>Discount</span>
          <span>${(parseFloat(sessionStorage.getItem("discount"))).toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-md pt-2">
          <span>Sub Total</span>
          <span>${(data.totalPrice - (sessionStorage.getItem("discount") ? parseFloat(sessionStorage.getItem("discount")) : 0)).toFixed(2)}</span>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default PaymentSuccessful;

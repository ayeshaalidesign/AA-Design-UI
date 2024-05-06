import React from 'react';

const ShoppingCartModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`} style={{ fontFamily: 'Seasons' }}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-full sm:w-11/12 md:w-9/12 lg:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto mt-6">
        <div className="modal-content py-2 text-left px-6">
          <h2 className="text-2xl font-bold mb-4 mt-4">Product added to cart!</h2>
          <div className="flex flex-col sm:flex-row justify-center mt-4 mb-4">
            <button
              className="bg-black w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
              onClick={() => {
                onClose();
              }}
            >
              Continue Shopping
            </button>
            <button
               className="bg-black w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"
              onClick={() => {
                window.location.href = '/cart';
              }}
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;

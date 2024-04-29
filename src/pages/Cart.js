import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartProvider";
import '../App.css';
import CheckoutModal from "../components/CheckoutModal";

const Cart = () => {
//   const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(formData);
    // Close modal after submission
    setIsModalOpen(false);
  };

  return (
    <div style={{fontFamily:'Seasons'}} className="px-12">
       <div
      className="w-full bg-white top-0 right-0 shadow-2xl  transition-all duration-300 z-20 px-4 py-4 "
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
       
      </div>
      <div className="flex flex-col gap-y-2 min-h-screen border-b">
        {cart.length === 0 && (
          <>
          <div className="flex justify-center items-center">
            <h2 className="text-center mt-40">No Products.</h2>
          </div>
          </>
        )}
        {cart.map((item) => {
          return <CartItem item={item} key={item.ProductId} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link 
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
          onClick={handlePayClick}
        >
         Checkout
        </Link>
        <Link
         
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Pay
        </Link>
        <CheckoutModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      </div>
    </div>
    </div>
   
  );
};

export default Cart;

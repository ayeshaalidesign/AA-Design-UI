import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartProvider";
import '../App.css';

const Cart = () => {
//   const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div style={{fontFamily:'Seasons'}}>
       <div
      className="w-full bg-white top-0 right-0 shadow-2xl  transition-all duration-300 z-20 px-4 py-4 "
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
       
      </div>
      <div className="flex flex-col gap-y-2 h-auto border-b">
        {cart.length === 0 && (
          <>
          <div className="h-80">
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
          to={"/cart"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
         Pay
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
    </div>
   
  );
};

export default Cart;

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartProvider";

const CartItem = ({ item }) => {
  console.log("item:", item)
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  const { ProductId, ProductName, ImageUrl, ProductPrice, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${ProductPrice}`}>
          <img className="max-w-[80px]" src={ImageUrl} alt="Product" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${ProductId}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {ProductName}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(ProductId)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={()=>decreaseAmount(ProductId)} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={()=>increaseAmount(ProductId)} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center">
              $ {ProductPrice}
            </div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              ProductPrice * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
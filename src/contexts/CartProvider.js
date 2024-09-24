import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartModal from "../components/ShoppingCartModal";
import { trackEvent } from "../utils/FacebookPixel";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [modal, setModal] = useState(false);


  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.ProductPrice * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
    
  }, [cart]);

  const addToCart = (product, id, size) => {
    trackEvent("Add to Cart");
    var sizeId = 0;
    if (size === "") {
      toast.error("Please select a size.",{ autoClose: 1000 });
      return;
    }

    if (size === 'xs') {
      sizeId = 1;
    } else if (size === 's') {
      sizeId = 2;
    } else if (size === 'm') {
      sizeId = 3; 
    } else if (size === 'l') {
      sizeId = 4;
    } else {
      sizeId = 5;
    }
  
    const newItem = { ...product, size: size, amount: 1, SizeId: sizeId};
    const existingItem = cart.find(
      (item) => item.ProductId === id && item.size !== size
    );
  
    if (existingItem) {
      setCart([...cart, newItem]);
    } else {
      const cartItemIndex = cart.findIndex(
        (item) => item.ProductId === id && item.size === size
      );
  
      if (cartItemIndex !== -1) {
        const newCart = [...cart];
        newCart[cartItemIndex].amount += 1;
        setCart(newCart);
      } else {
        setCart([...cart, newItem]);
      }
    }
    setModal(true);
  };
  
  const removeFromCart = (id, size) => {
    const newCart = cart.filter((item) => !(item.ProductId === id && item.size === size));
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id, size) => {
    const cartItem = cart.find((item) => item.ProductId === id && item.size === size);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.ProductId === id && item.size === size
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(newCart);
    }
  };

  const decreaseAmount = (id, size) => {
    const cartItem = cart.find((item) => item.ProductId === id && item.size === size);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.ProductId === id && item.size === size && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
      <ShoppingCartModal isOpen={modal} onClose={handleCloseModal}/>
    </CartContext.Provider>
  );
};

export default CartProvider;

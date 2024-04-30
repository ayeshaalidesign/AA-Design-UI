import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartModal from "../components/ShoppingCartModal";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  const [modal, setModal] = useState(false);


  const handleCloseModal = () => {
    setModal(false);
  };





  useEffect(() => {
    // Retrieve cart data from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // Calculate total price
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.ProductPrice * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cart"));
    // console.log(storedCart,"cart")
    if (storedCart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
    
  }, [cart]);

  // add to cart
  const addToCart = (product, id, size) => {
    if (size === "") {
      toast.error("Please select a size.",{ autoClose: 1000 });
      return;
    }
  
    const newItem = { ...product, size: size, amount: 1 };
  
    // Check if the item is already in the cart with the same ID but a different size
    const existingItem = cart.find(
      (item) => item.ProductId === id && item.size !== size
    );
  
    if (existingItem) {
      // If an item with the same ID but a different size exists, add a new item
      setCart([...cart, newItem]);
    } else {
      // Otherwise, check if the item is already in the cart with the same size
      const cartItemIndex = cart.findIndex(
        (item) => item.ProductId === id && item.size === size
      );
  
      if (cartItemIndex !== -1) {
        // If the item already exists in the cart with the same size, update its quantity
        const newCart = [...cart];
        newCart[cartItemIndex].amount += 1;
        setCart(newCart);
      } else {
        // If the item is not in the cart, add it to the cart
        setCart([...cart, newItem]);
      }
    }
    setModal(true);
  };
  


  // remove from cart
  const removeFromCart = (id, size) => {
    const newCart = cart.filter((item) => !(item.ProductId === id && item.size === size));
    setCart(newCart);
  };

  // clear  cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
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

  // decrease amount
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

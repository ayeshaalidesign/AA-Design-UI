import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);




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
    console.log(storedCart,"cart")
    if (storedCart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
    
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if the item is already in the cart
    const cartItemIndex = cart.findIndex((item) => item.ProductId === id);

    if (cartItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const newCart = [...cart];
        newCart[cartItemIndex].amount += 1;
        setCart(newCart);
    } else {
        // If the item is not in the cart, add it to the cart
        setCart([...cart, newItem]);
    }
};


  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.ProductId !== id;
    });
    setCart(newCart);
  };

  // clear  cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.ProductId === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.ProductId === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.ProductId === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.ProductPrice < 2) {
      removeFromCart(id);
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
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
const ProductsProvider = ({ children }) => {

const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/product");
      const data = await response.json();
      const sortedProducts = data.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, []);

return (
  <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>
);
};

export default ProductsProvider;

import React, { useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import AppLoader from '../loader/AppLoader';

const Shawls = () => {
  
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

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.categoryName]) {
      acc[product.categoryName] = [];
    }
    acc[product.categoryName].push(product);
    return acc;
  }, {});

  if (products.length === 0) {
    return (
      
        <AppLoader/>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col justify-center items-center">
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <ProductCard
            key={category}
            category={category}
            products={categoryProducts}
          />
        ))}


      </div>
    </div>
  );
};

export default Shawls;

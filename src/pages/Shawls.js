import React, { useEffect, useState} from 'react';
import AppLoader from '../loader/AppLoader';

const Shawls = () => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/Product/collection/5");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, []);

const handleRedirection = (id) => {
  window.location.href = `/shawls-details/${id}`;
};


  if (products.length === 0) {
    return (
      
        <AppLoader/>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
      {products.map((product, index) => (
        <div key={index} className="relative rounded-md ">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="object-cover rounded-md"
          />
          <h2 className="font-md font-semibold text-left mt-2 cursor-pointer" onClick={() => handleRedirection(product.productId)}>
            {product.productName}
          </h2>
          <h2 className="text-sm text-left mt-2">
            {product.productDetail}
          </h2>
          <h2 className="font-md text-left mt-2">
            ${product.productPrice}
          </h2>
          <button
            className="mt-6 text-md font-semibold text-white bg-black px-4 py-2 w-full mb-6"
            onClick={() => handleRedirection(product.productId)}
          >
            Shop
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Shawls;

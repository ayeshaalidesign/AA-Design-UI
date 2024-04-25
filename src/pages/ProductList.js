import React, { useContext } from 'react';
import ProductCard from "../components/ProductCard";
import { ProductContext } from '../contexts/ProductsProvider';
import AppLoader from '../loader/AppLoader';
const ProductCardList = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext || { products: [] };

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
      {/* <h1 className="text-xl mt-12 mb-6 text-black font-semibold leading-snug tracking-wide uppercase text-center">Elevate Your Style with Ready-to-Wear Fashion</h1>
      <p className="text-sm px-8 mx-12 mb-12 pb-8 text-black ">The Alexander McQueen collection of women's ready-to-wear focuses on cut, proportion and silhouette. Elevated essentials in impeccable fabrics, from tailored jackets to dresses, knitwear, trousers, skirts and shirts, are all designed to empower.</p> */}
      <div className="flex flex-wrap -mx-4">
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

export default ProductCardList;

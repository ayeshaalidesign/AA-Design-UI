import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductsProvider";
import AppLoader from "../loader/AppLoader";

const ProductCardList = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext || { products: [] };

  if (products.length === 0) {
    return <AppLoader />;
  }

  const handleRedirection = (id) => {
    window.location.href = `/products/${id}`;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative rounded-md flex flex-col h-full">
            <img
              src={product.imageUrl}
              alt={`${product.productName}`}
              className="object-cover rounded-md"
            />
            <div className="flex-grow">
              <h2
                className="font-md font-semibold text-left mt-2 cursor-pointer"
                onClick={() => handleRedirection(product.productId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleRedirection(product.productId)
                }
              >
                {product.productName}
              </h2>
              <h3 className="text-md text-left font-semibold">
                {product.productDetail}
              </h3>
              <h2 className="font-md text-left mt-2">
                ${product.productPrice}
              </h2>
            </div>
            <button
              className="mt-6 text-md font-semibold text-white bg-black px-4 py-2 w-full mb-6 hover:bg-gray-800 transition"
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

export default ProductCardList;

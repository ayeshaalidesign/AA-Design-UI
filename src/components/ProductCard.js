import React from "react";
import "../App.css";

const ProductCard = ({ category, products }) => {
  const handleRedirection = (id) => {
    window.location.href = `/products/${id}`;
  };

  return (
    <div>
      {/* <h2
        className="text-3xl font-semibold text-center mb-12 mt-12 font-verdana"
        style={{ color: "#917030" }}
      >
        {category}
      </h2> */}
      <div className="flex justify-center items-center gap-12 mx-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.productName}
                onClick={() => handleRedirection(product.productId)}
                className="w-full h-full mt-6 mb-6 object-cover rounded-md"
              />
              {/* discount change */}
              {/* <div className="absolute bottom-44 left-0 text-white text-sm font-semibold px-2 py-1 rounded-md" style={{ background: "#917030" }}>
                10% OFF
              </div> */}
              <h2
                className="font-md font-semibold text-left mt-2 cursor-pointer"
                onClick={() => handleRedirection(product.productId)}
              >
                {product.productName}
              </h2>
              <h2 className="text-sm text-left mt-2">
               {product.productDetail}
              </h2>
              <h2 className="font-md text-left mt-2">
                ${product.productPrice}
              </h2>
              <button
                onClick={() => handleRedirection(product.productId)}
                className="mt-6 text-md font-semibold text-white bg-black px-2 py-2 w-full mb-6 font-verdana"
              >
                Shop
              </button>
            </div>

            <div></div>
          </div>
        ))}
      </div>
    </div>

    // <div className="w-1/2 p-2">
    // <a href={`/products/${id}`}>
    // <div className="bg-white rounded-md overflow-hidden  transform transition-transform hover:scale-105">
    //     <img className="w-full h-auto object-cover object-center px-40" src={image} alt={title} />
    //     <div className="p-4">
    //     </div>
    //   </div>
    // </a>
    // </div>
  );
};

export default ProductCard;

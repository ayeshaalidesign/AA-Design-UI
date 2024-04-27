import React from 'react';
import '../App.css';

const ProductCard = ({category, products}) => {

  const handleRedirection = (id) => {
    window.location.href = `/products/${id}`;
  } 

  return (
    <div className="px-20 sm:px-6">
    <h2 className="text-3xl font-semibold text-center px-12 mb-12 mt-12" style={{ color:'#917030', fontFamily:'Seasons' }}>{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 lg:ml-60">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
           <div>
           <img src={product.imageUrl} alt={product.productName} className="w-56 h-80 mt-6 object-cover rounded-md" />
            <h2 className='font-md font-semibold text-left mt-2 cursor-pointer' onClick={() => handleRedirection(product.productId)}>{product.productName}</h2>
            <h2 className='font-md text-left mt-2'>${product.productPrice}</h2>
           </div>
           <div>
           <button onClick={() => handleRedirection(product.productId)} className='mt-6 text-md font-semibold text-white bg-black px-2 py-2 w-1/2' style={{ fontFamily:'Seasons Light' }}>Shop Now</button>
           </div>
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

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartProvider";
import '../App.css';
import CheckoutModal from "../components/CheckoutModal";
import { toast } from "react-toastify";
import PromoCodeModal from "../components/PromoCodeModal";

const Cart = () => {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressID, setAddressID] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  const handlePayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePromoClick = () => {
    setIsPromoModalOpen(true);
  };

  const handleClosePromoModal = () => {
    setIsPromoModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/Checkout/checkout-prepare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phoneNumber,
          country: formData.country,
        })
      });
  
      const data = await response.json();
      setAddressID(data.addressID); 
      localStorage.setItem('email', formData.email);
      
      await initiateStripeRequest(formData.email, data);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsModalOpen(false);
  };

  const handlePromoFormSubmit = async (formData) => {
    setPromoCode(formData.promocode);
    try {
      const url = 'https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/discount?promocode=' + formData.promocode + '&totalprice=' + total;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      if (data.message === "Promocode is Valid") {
        setDiscount(data.discount);
        toast.success('PromoCode applied successfully.', {autoClose:1000})
      } else {
        toast.error('Invalid PromoCode.', {autoClose:1000})
      }
     
    } catch (error) {
      console.error('Error:', error);
    }
    setIsPromoModalOpen(false);
  };
  
  
  const initiateStripeRequest = async (email, addressID) => {
    const productsData = JSON.parse(localStorage.getItem("cart"));
    let totalPrice = 0;
    let orderItems = [];
  
    productsData.forEach(product => {
      totalPrice += (product.ProductPrice) * product.amount;
      orderItems.push({
        productid: product.ProductId,
        quantity: product.amount,
        sizeid: product.SizeId
      });
    });
  
    const payload = {
      addressid: addressID,
      dispatchid: "string",
      totalprice: total,
      orderProgress: "string",
      email: email,
      orderItemss: orderItems,
      promocode:promoCode
    };
  
    try {
      const response = await fetch('https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/Checkout/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const responseData = await response.json();
      if (responseData.isSuccess === true) {
        window.location.href = responseData.checkoutSessionURL; 
      } else {
        toast.error("There was some error.",{ autoClose: 1000 });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="font-verdana" >
       <div
      className="w-full bg-white top-0 right-0 shadow-2xl  transition-all duration-300 z-20 px-4 py-4 "
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
       
      </div>
      <div className="flex flex-col gap-y-2 border-b">
        {cart.length === 0 && (
          <>
          <div className="flex justify-center items-center">
            <h2 className="text-center mt-40 mb-40">No Products.</h2>
          </div>
          </>
        )}
        {cart.map((item) => {
          return <CartItem item={item} key={item.ProductId} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex-col text-left">
            <div className="font-semibold mb-4">
              <p>Do you have a promo code ? <span onClick={() => handlePromoClick()} className="text-blue-500 cursor-pointer">Apply Now</span></p>
            </div>
            {/* total */}
          <div className="font-semibold mb-2">
            <span className="mr-1">Total:</span> $
            {parseFloat(total).toFixed(2)}
          </div>

          <div className="font-semibold mb-2">
            <span className="mr-1">Discount:</span> $
            {discount.toFixed(2)}
          </div>
           {/* discount change */}
          <div className="font-semibold">
            <span className="mr-1">Subtotal:</span> $
            {(parseFloat(total) - discount).toFixed(2)}
          </div>
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link 
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
          onClick={handlePayClick}
        >
         Checkout
        </Link>
       
        <CheckoutModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />

        <PromoCodeModal isOpen={isPromoModalOpen} onClose={handleClosePromoModal} onSubmit={handlePromoFormSubmit} />
      </div>
    </div>
    </div>
   
  );
};

export default Cart;

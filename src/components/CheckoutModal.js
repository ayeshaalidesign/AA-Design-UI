import React, { useState, useEffect } from "react";

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "USA",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto mt-1">
        <div className="modal-content py-2 text-left px-6">
          <h2 className="text-xl font-bold mb-2 mt-2">Checkout</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-1 gap-2"
          >
            <div className="md:col-span-2">
              <label
                htmlFor="firstName"
                className="block text-black text-sm font-bold mb-2 "
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="lastName"
                className="block text-black text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-black text-sm font-bold mb-2 "
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-black text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label
                htmlFor="country"
                className="block text-black text-sm font-bold mb-2 "
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="md:col-span-2 flex items-center justify-between mb-2">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ml-4"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default CheckoutModal;

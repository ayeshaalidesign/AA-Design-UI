import React, { useState } from "react";

const PromoCodeModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    promocode: "",
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
          <h2 className="text-xl font-bold mb-2 mt-2">Add PromoCode</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-1 gap-2"
          >
            <div className="md:col-span-2">
              <label
                htmlFor="promocode"
                className="block text-black text-sm font-bold mb-2 "
              >
                PromoCode
              </label>
              <input
                id="promocode"
                type="text"
                name="promocode"
                value={formData.promocode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="PromoCode"
                required
              />
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

export default PromoCodeModal;

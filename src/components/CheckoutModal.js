import React, { useState, useEffect } from 'react';

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    postalCode: '',
    address: '',
    streetNumber: '',
    city:'',
    state:''
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

  const [cityOptions, setCityOptions] = useState([]);


  const cityData = {
    "Alabama": ["Birmingham", "Montgomery", "Mobile", "Huntsville"],
    "Alaska": ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
    "Arizona": ["Phoenix", "Tucson", "Mesa", "Chandler"],
    "Arkansas": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"],
    "California": ["Los Angeles", "San Francisco", "San Diego", "San Jose"],
    "Colorado": ["Denver", "Colorado Springs", "Aurora", "Fort Collins"],
    "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford"],
    "Delaware": ["Wilmington", "Dover", "Newark", "Middletown"],
    "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville"],
    "Georgia": ["Atlanta", "Augusta", "Savannah", "Athens"],
    "Hawaii": ["Honolulu", "Hilo", "Kailua", "Kapolei"],
    "Idaho": ["Boise", "Nampa", "Meridian", "Idaho Falls"],
    "Illinois": ["Chicago", "Aurora", "Rockford", "Joliet"],
    "Indiana": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    "Iowa": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"],
    "Kansas": ["Wichita", "Overland Park", "Kansas City", "Topeka"],
    "Kentucky": ["Louisville", "Lexington", "Bowling Green", "Owensboro"],
    "Louisiana": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"],
    "Maine": ["Portland", "Lewiston", "Bangor", "South Portland"],
    "Maryland": ["Baltimore", "Frederick", "Rockville", "Gaithersburg"],
    "Massachusetts": ["Boston", "Worcester", "Springfield", "Lowell"],
    "Michigan": ["Detroit", "Grand Rapids", "Warren", "Ann Arbor"],
    "Minnesota": ["Minneapolis", "St. Paul", "Rochester", "Duluth"],
    "Mississippi": ["Jackson", "Gulfport", "Southaven", "Hattiesburg"],
    "Missouri": ["Kansas City", "St. Louis", "Springfield", "Columbia"],
    "Montana": ["Billings", "Missoula", "Great Falls", "Bozeman"],
    "Nebraska": ["Omaha", "Lincoln", "Bellevue", "Grand Island"],
    "Nevada": ["Las Vegas", "Henderson", "Reno", "North Las Vegas"],
    "New Hampshire": ["Manchester", "Nashua", "Concord", "Derry"],
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth"],
    "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"],
    "New York": ["New York City", "Buffalo", "Rochester", "Yonkers"],
    "North Carolina": ["Charlotte", "Raleigh", "Greensboro", "Durham"],
    "North Dakota": ["Fargo", "Bismarck", "Grand Forks", "Minot"],
    "Ohio": ["Columbus", "Cleveland", "Cincinnati", "Toledo"],
    "Oklahoma": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
    "Oregon": ["Portland", "Salem", "Eugene", "Gresham"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie"],
    "Rhode Island": ["Providence", "Warwick", "Cranston", "Pawtucket"],
    "South Carolina": ["Columbia", "Charleston", "North Charleston", "Mount Pleasant"],
    "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"],
    "Tennessee": ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    "Texas": ["Houston", "San Antonio", "Dallas", "Austin"],
    "Utah": ["Salt Lake City", "West Valley City", "Provo", "West Jordan"],
    "Vermont": ["Burlington", "Essex", "South Burlington", "Colchester"],
    "Virginia": ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"],
    "Washington": ["Seattle", "Spokane", "Tacoma", "Vancouver"],
    "West Virginia": ["Charleston", "Huntington", "Parkersburg", "Morgantown"],
    "Wisconsin": ["Milwaukee", "Madison", "Green Bay", "Kenosha"],
    "Wyoming": ["Cheyenne", "Casper", "Laramie", "Gillette"]
  };
  
  

  useEffect(() => {
    if (formData.state) {
      setCityOptions(cityData[formData.state]);
    } else {
      setCityOptions([]);
    }
     // eslint-disable-next-line
  }, [formData.state]);

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto mt-6">
        

        <div className="modal-content py-2 text-left px-6">
          <h2 className="text-2xl font-bold mb-4 mt-4">Checkout</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Email"
            required
          />
        </div>
        <div >
          <label htmlFor="phoneNumber" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Address"
            required
          />
        </div>
        <div >
  <label htmlFor="state" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">State</label>
  <select
    id="state"
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
    required
  >
    <option value="" disabled>Select your state</option>
    {/* Map through cityData to create options for states */}
    {Object.keys(cityData).map((state, index) => (
      <option key={index} value={state}>{state}</option>
    ))}
  </select>
</div>
        <div >
          <label htmlFor="city" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            required
          >
            <option value="" disabled>Select your city</option>
            {/* Populate options based on the selected state */}
            {cityOptions.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="streetNumber" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Street Number</label>
          <input
            id="streetNumber"
            type="text"
            name="streetNumber"
            value={formData.streetNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Street Number"
          />
        </div>
        <div >
          <label htmlFor="postalCode" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Postal Code</label>
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            placeholder="Postal Code"
            required
          />
        </div>
        <div >
          <label htmlFor="country" className="block text-zinc-700 text-sm font-bold mb-2 dark:text-zinc-300">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-zinc-700 dark:text-white"
            required
          >
            <option value="" disabled>Select your country</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-700">Submit</button>
          <button type="button" onClick={onClose} className="text-gray-500 dark:text-gray-300 ml-4">Close</button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;




import React from 'react';
import '../App.css';

const SizeChart = () => {
  return (
    <div className='mt-4 text-black'>
      <h2 className="text-md font-bold mb-2" style={{fontFamily:'Seasons'}}>Size Chart In Inches</h2>
      <div className="">
  <table className="table-auto border-collapse border border-gray-300 rounded-lg">
    <thead>
      <tr className="bg-gray-200" style={{fontFamily:'Seasons'}}>
        <th className="px-4 py-2">Size</th>
        <th className="px-4 py-2">Waist</th>
        <th className="px-4 py-2">Length</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{fontFamily:'Seasons Light'}}>
        <td className="border px-4 py-2">XS</td>
        <td className="border px-4 py-2">13.5</td>
        <td className="border px-4 py-2">42.5</td>
      </tr>
      <tr style={{fontFamily:'Seasons Light'}}>
        <td className="border px-4 py-2">S</td>
        <td className="border px-4 py-2">14.5</td>
        <td className="border px-4 py-2">43</td>
      </tr>
      <tr style={{fontFamily:'Seasons Light'}}>
        <td className="border px-4 py-2">M</td>
        <td className="border px-4 py-2">15.5</td>
        <td className="border px-4 py-2">44</td>
      </tr>
      <tr style={{fontFamily:'Seasons Light'}}>
        <td className="border px-4 py-2">L</td>
        <td className="border px-4 py-2">17.5</td>
        <td className="border px-4 py-2">44</td>
      </tr>
      <tr style={{fontFamily:'Seasons Light'}}>
        <td className="border px-4 py-2">XL</td>
        <td className="border px-4 py-2">18.5</td>
        <td className="border px-4 py-2">45</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default SizeChart;
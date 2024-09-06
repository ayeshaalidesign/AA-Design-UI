import React from "react";
import "../App.css";

const SizeChart = ({ productName,  }) => {
  return (
    <div className=" text-black mb-2">
      <h2 className="text-md font-bold mb-2 font-verdana">
        Size Chart In Inches
      </h2>

      {productName === "Celine-Black" || productName === "Celine-Olive" ? (
        <>
         <div>
        <table className="table-auto border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 font-verdana">
              <th className="px-2 py-2">Size</th>
              <th className="px-2 py-2">Waist</th>
              <th className="px-2 py-2">Length</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XS</td>
              <td className="border px-2 py-2">13.5</td>
              <td className="border px-2 py-2">42.5</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">S</td>
              <td className="border px-2 py-2">14.5</td>
              <td className="border px-2 py-2">43</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">M</td>
              <td className="border px-2 py-2">15.5</td>
              <td className="border px-2 py-2">44</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">L</td>
              <td className="border px-2 py-2">17.5</td>
              <td className="border px-2 py-2">44</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XL</td>
              <td className="border px-2 py-2">18.5</td>
              <td className="border px-2 py-2">45</td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
      ) : null}

      {productName === "Fara-Red" || productName === "Fara-Cream" ? (
        <>
         <div>
        <table className="table-auto border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 font-verdana">
              <th className="px-2 py-2">Size</th>
              <th className="px-2 py-2">Waist</th>
              <th className="px-2 py-2">Length</th>
              <th className="px-2 py-2">Inseam</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XS</td>
              <td className="border px-2 py-2">13.5</td>
              <td className="border px-2 py-2">40</td>
              <td className="border px-2 py-2">29</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">S</td>
              <td className="border px-2 py-2">14.5</td>
              <td className="border px-2 py-2">40.5</td>
              <td className="border px-2 py-2">29</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">M</td>
              <td className="border px-2 py-2">15.5</td>
              <td className="border px-2 py-2">41</td>
              <td className="border px-2 py-2">29</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">L</td>
              <td className="border px-2 py-2">17.5</td>
              <td className="border px-2 py-2">41.5</td>
              <td className="border px-2 py-2">29</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XL</td>
              <td className="border px-2 py-2">18.5</td>
              <td className="border px-2 py-2">42</td>
              <td className="border px-2 py-2">29</td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
      ): null}

{productName === "Neha-Black" || productName === "Neha-Gold" ? (
        <>
         <div>
        <table className="table-auto border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 font-verdana">
              <th className="px-2 py-2">Size</th>
              <th className="px-2 py-2">Chest</th>
              <th className="px-2 py-2">Sleeve</th>
              <th className="px-2 py-2">Length</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XS</td>
              <td className="border px-2 py-2">18</td>
              <td className="border px-2 py-2">23</td>
              <td className="border px-2 py-2">15</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">S</td>
              <td className="border px-2 py-2">19</td>
              <td className="border px-2 py-2">23.5</td>
              <td className="border px-2 py-2">15</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">M</td>
              <td className="border px-2 py-2">20</td>
              <td className="border px-2 py-2">24</td>
              <td className="border px-2 py-2">15.5</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">L</td>
              <td className="border px-2 py-2">21</td>
              <td className="border px-2 py-2">24.5</td>
              <td className="border px-2 py-2">16</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XL</td>
              <td className="border px-2 py-2">22</td>
              <td className="border px-2 py-2">24.5</td>
              <td className="border px-2 py-2">16.5</td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
      ): null}

{productName === "Raya-Olive" || productName === "Raya-White" ? (
        <>
         <div>
        <table className="table-auto border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 font-verdana">
              <th className="px-2 py-2">Size</th>
              <th className="px-2 py-2">Chest</th>
              <th className="px-2 py-2">Sleeve</th>
              <th className="px-2 py-2">Length</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XS</td>
              <td className="border px-2 py-2">18</td>
              <td className="border px-2 py-2">8.5</td>
              <td className="border px-2 py-2">15</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">S</td>
              <td className="border px-2 py-2">19</td>
              <td className="border px-2 py-2">9</td>
              <td className="border px-2 py-2">15</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">M</td>
              <td className="border px-2 py-2">20</td>
              <td className="border px-2 py-2">9.5</td>
              <td className="border px-2 py-2">15.5</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">L</td>
              <td className="border px-2 py-2">21</td>
              <td className="border px-2 py-2">9.5</td>
              <td className="border px-2 py-2">16</td>
            </tr>
            <tr className="font-verdana">
              <td className="border px-2 py-2">XL</td>
              <td className="border px-2 py-2">22</td>
              <td className="border px-2 py-2">10</td>
              <td className="border px-2 py-2">16.5</td>
            </tr>
          </tbody>
        </table>
      </div>
        </>
      ): null}

      {
        (productName === "Blue & Silver Shawl" || productName === "Black & Silver Shawl" || productName === "Red & Silver Shawl" || productName === "Red & Silver Shawl" || productName === "Grey & Silver Shawl" || productName === "Beige & Gold Shawl" || productName === "Cream & Gold Shawl") ? (
          <>
           <div>
        <table className="table-auto border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 font-verdana">
              <th className="px-4 py-2">Length</th>
              <th className="px-4 py-2">Width</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-verdana">
              <td className="border px-4 py-2">87</td>
              <td className="border px-4 py-2">42</td>
            </tr>
           
          </tbody>
        </table>
      </div>
          </>
        ) : null 
      }
    </div>
  );
};

export default SizeChart;

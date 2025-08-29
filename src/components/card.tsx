
"use client"
import React, { useState } from "react";
import { CircularProgress } from "./accountprogress";
import { Check } from "lucide-react";

export const AccountProgressCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  return (
    <div className="max-w-md   mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 mt-5">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Account Progress</h2>
        <CircularProgress percentage={90} strokeWidth={10} />
      </div>


      {/* Option Boxes */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
        {/* Box 1 */}
        <label
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${selectedOption === "option1" ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
        >
          <input
            type="radio"
            name="accountOption"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={() => setSelectedOption("option1")}
            className="mr-3 h-5 w-5 text-blue-600 accent-blue-600"
          />
          <span className="text-gray-700">Option 1: Some description here</span>
        </label>

        {/* Box 2 */}
        <label
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${selectedOption === "option2" ? "border-green-500 bg-green-50" : "border-gray-300"
            }`}
        >
          <input
            type="radio"
            name="accountOption"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={() => setSelectedOption("option2")}
            className="mr-3 h-5 w-5 text-green-600 accent-green-600"
          />
          <span className="text-gray-700">Option 2: Some description here</span>
        </label>

        {/* Box 3 */}
        <label
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${selectedOption === "option3" ? "border-yellow-500 bg-green-50" : "border-gray-300"
            }`}
        >
          <input
            type="radio"
            name="accountOption"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={() => setSelectedOption("option3")}
            className="mr-3 h-5 w-5 text-yellow-600 accent-yellow-600"
          />
          <span className="text-gray-700">Option 3: Some description here</span>
        </label>

      </div>

      <div className="p-1 bg-white rounded-xl shadow-md">
        <h1 className="text-xl font-semibold text-gray-800 border-b pb-3">
          Steps Remaining
        </h1>

        <ul className=" space-y-3">
          <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <span className="text-gray-700 font-medium">Financial Integration</span>
            <Check className="text-green-500 w-5 h-5" />
          </li>

          <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <span className="text-gray-700 font-medium">Final Review</span>
            <Check className="text-green-500 w-5 h-5" />
          </li>

          <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <span className="text-gray-700 font-medium">Profile Setup</span>
            <Check className="text-green-500 w-5 h-5" />
          </li>


        </ul>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {Link} from 'react-router-dom'
function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left  rounded-lg">
      {/* Trigger button for the dropdown */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-[rgb(21,76,122)] rounded-md  hover:rounded-lg focus:bg-[rgb(19,40,57)]   hover:bg-[rgb(19,40,57)] text-white focus:outline-none "
      >
       Select
        <svg className="w-4 h-4 inline-block ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.293 12.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1 0 1.414z"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div onClick={toggleDropdown} className="absolute mt-2 py-[3px] w-48 bg-gradient-to-b from-[rgb(21,76,122)] to-[#002b4c] text-white border ml-20 border-gray-300 rounded-lg shadow-lg">
          <Link to="/" className="block px-4 py-2  hover:bg-[rgb(19,40,57)]">
          Todos
          </Link>
          <Link  to='/completed' className="block px-4 py-2 text-white hover:bg-[rgb(19,40,57)]">
             Deleted
          </Link>
         
        </div>
      )}
    </div>
  );
}

export default Dropdown;

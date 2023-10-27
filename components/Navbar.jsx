import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar = ({searchData, onSearch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  
 
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="bg-white p-4  ">
      <div className="container mx-auto flex justify-between items-center">
      <ul className={` px-2 fixed  left-0 lg:flex top-14 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0 left-0 z-10' : 'opacity-0 left-[-490px] z-0'}`}>
            <li className='my-7'><a href="/home" className="text-black">Home</a></li>
            <li className='my-7'><a href="/about" className="text-black">About</a></li>
            <li className='my-7'><a href="/services" className="text-black">Services</a></li>
            <li className='my-7'><a href="/contact" className="text-black">Contact</a></li>
        </ul>
        <button onClick={toggleNavbar} className="text-black lg:hidden">
          <FaBars />
        </button>
        <button onClick={toggleSearch} className={`text-black ${isSearchVisible ? 'hidden' : 'lg:hidden'}`}>
          <FaSearch />
        </button>
        <div className={`lg:flex items-center space-x-4 ${isSearchVisible ? 'relative' : 'hidden'}`}>
          {isSearchVisible && (
            <div className="relative">
              <input
                type="text"
                className="border text-black border-gray-300 rounded  px-2"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
             
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

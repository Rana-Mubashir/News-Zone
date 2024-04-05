import React, { useState } from 'react';

function Navbar({ setCategory, setCountry }) {
  const navItems = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
  const [resDisplay, setResDisplay] = useState('hidden')
  return (
    <>
      <div>
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#" className="text-white text-xl font-semibold">News Site</a>
              <button className="md:hidden text-white"
                onClick={() => setResDisplay((prev) => prev === 'hidden' ? 'flex' : 'hidden')}
              >
                <svg className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className={` ${resDisplay} flex-col md:flex md:flex-row   items-center justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0`}>
              {navItems.map((item) =>
                <p className="text-white cursor-pointer mb-2 md:mb-0 md:mx-4 hover:bg-blue-900"
                 key={item} onClick={(e) => setCategory(e.target.textContent)}>
                  {item}
                </p>
              )}
              <div className="w-full md:w-64">
                <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setCountry(e.target.value)}>
                  <option value="us">United States</option>
                  <option value="in">India</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="p-5 mb-5 flex justify-center items-center">
        <h1 className='text-4xl md:text-6xl'> Latest <span className='text-red-500'>News</span></h1>
      </div>
    </>
  );
}

export default Navbar;

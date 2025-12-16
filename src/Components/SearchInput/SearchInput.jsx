import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

const SearchInput = ({ inputValue, onChange }) => {
  return (
    <div className="relative font-semibold w-full max-w-sm md:max-w-md lg:max-w-lg border-x-2 py-5 px-4 dark:border-neutral-600 border-gray-400 mx-auto">
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className="w-full hover:rounded-4xl bg-gray-200 dark:bg-neutral-700 pl-10 pr-4 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-sm"
        value={inputValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      
      {/* Search Icon Button */}
      <button 
        className="text-xl dark:text-neutral-300 absolute left-7 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-700"
        aria-label="Search"
      >
        <RiSearchLine />
      </button>
    </div>
  );
}

export default SearchInput;
import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

const SearchInput = ({ inputValue, onChange }) => {
  return (
    <div className="relative font-semibold w-80 border-x-2 py-5 px-5 border-gray-400">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-200 px-8 py-2 border-0"
        value={inputValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button className="text-xl absolute left-7 top-7 cursor-pointer">
        <RiSearchLine />
      </button>
    </div>
  );
}

export default SearchInput;
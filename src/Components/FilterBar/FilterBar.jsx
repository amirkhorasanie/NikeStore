import React from "react";

const FilterBar = () => {
    return (
      <div className="md:w-full font-semibold border-l-2 py-5 px-3 md:px-4 dark:border-neutral-600 border-gray-400">
        <div  className="text-base w-23 hover:rounded-4xl transition-all duration-400 rounded-sm px-4 py-1.5 dark:bg-white dark:text-black bg-black text-white inline-block cursor-pointer hover:opacity-90">
        <p>
          + Filters
        </p>
        </div>
      </div>
    );
  };
  
export default FilterBar;
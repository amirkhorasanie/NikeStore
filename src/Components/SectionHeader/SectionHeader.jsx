import React from "react"

const SectionHeader = ({title}) => {
    return (
      // Preserve the border and padding, but apply responsive horizontal padding (px-4 in mobile)
      // to prevent overflow and ensure space from screen edges.
      <div className="mx-5">
      <div className='flex py-6 px-4 md:px-8 border-x-2 dark:border-neutral-600 border-gray-400 justify-center items-center'>
          <h2 className='text-3xl mx-8 md:text-4xl lg:text-5xl font-semibold text-center'>
              {title}
          </h2>
      </div>
      </div>
    )
  }

export default SectionHeader;
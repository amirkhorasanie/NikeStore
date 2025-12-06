import React from "react"

const SectionHeader = ({title, text}) => {
    return (
      <>
      <div className='flex py-6 mx-8 border-x-2 border-gray-400 justify-center items-center'>
          <h2 className='text-5xl font-semibold '>{title}</h2>
      </div>
      </>
    )
  }

export default SectionHeader;
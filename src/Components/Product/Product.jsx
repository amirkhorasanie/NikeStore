import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({id, src, status, title, size, colornumber, price, New, See}) => {
  
  const PRODUCT_URL = `/products/${id}`;
  
  return (
    <>
        <div className='relative py-2
        transition-transform duration-400 hover:scale-100 group'>
          <p className='absolute top-10 font-semibold right-4 bg-black text-white px-3.5'>
            <Link to={PRODUCT_URL}>{New}</Link>
          </p>
          <Link to={PRODUCT_URL}>
            <img  className="w-95 py-2 px-4" src={src}/>
          </Link>
          {/* دکمه که فقط روی هاور نمایش داده می‌شود */}
          <button className="absolute inset-0 flex items-end pointer-events-none
            py-3.5 px-3.5 justify-end bg-gray-400/20
          text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className='text-white cursor-pointer bg-black text-[15px] px-3 py-1 pointer-events-auto font-semibold'>
              <Link to={PRODUCT_URL}>View Details</Link>
            </p>
          </button>
          <button className="absolute *:text-lg *:font-bold gap-2 *:text-black/70 *:my-3 mx-3 *:border-2 *:px-2  *:py-1 *:rounded-3xl
           *:border-white/55 inset-0 flex items-start pointer-events-none
           py-3.5 px-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>41</p>
            <p>42</p>
            <p>43</p>
          </button>
            <div className='px-4 *:mb-1'>
                <p className='text-[#f6200c] text-[18px] font-semibold'>
                  <Link to={PRODUCT_URL}>{status}</Link>
                </p>
                <p className='text-emerald-600 text-[18px] font-semibold'>
                  <Link to={PRODUCT_URL}>{See}</Link>
                </p>
                <p className='font-semibold text-[23px]'>
                  <Link to={PRODUCT_URL}>{title}</Link>
                </p>
                <p className='font-semibold text-gray-500'>
                  <Link to={PRODUCT_URL}>{size}</Link>
                </p>
                <p className='font-semibold text-gray-500'>
                  <Link to={PRODUCT_URL}>{colornumber}</Link>
                </p>
                <p className='font-semibold text-xl'>
                  <Link to={PRODUCT_URL}>{price}</Link>
                </p>
            </div>
        </div>
    </>
  )
}

export default Product
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

const Product = ({ id, src, status, title, size, colornumber, price, New, See }) => {
  const PRODUCT_URL = `/products/${id}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative py-2 transition-transform
      duration-400 hover:scale-100 group">
      
      <p className="absolute top-10 font-semibold
        right-4 bg-black text-white px-3.5">
        <Link to={PRODUCT_URL}>{New}</Link>
      </p>

      {loading ? (
        <Shimmer />
      ) : (
        <Link to={PRODUCT_URL}>
          <img className="w-full dark:brightness-75 object-cover py-2 px-4" src={src} />
        </Link>
      )}

      <button
        className="absolute inset-0 flex items-end
          pointer-events-none py-3.5 px-3.5 justify-end
        bg-neutral-600/20 text-white opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
      >
        <p className="text-white cursor-pointer bg-black dark:bg-white dark:text-black text-[15px]
          px-3 py-1 pointer-events-auto hover:rounded-4xl font-semibold">
          <Link to={PRODUCT_URL}>View Details</Link>
        </p>
      </button>

      <button
        className="absolute *:text-lg *:font-bold gap-2
      *:text-black/70 *:my-3 mx-3 *:border-2 *:px-2 *:py-1
       *:rounded-3xl *:border-white/55 inset-0 flex items-start
        pointer-events-none py-3.5 px-3.5 text-white opacity-0
        group-hover:opacity-100 transition-opacity duration-300"
      >
        <p>41</p>
        <p>42</p>
        <p>43</p>
      </button>

      <div className="px-4 *:mt-1 *:font-semibold">
        {loading ? (
          <div className="animate-pulse space-y-2 py-2">
            <div className="h-4 bg-gray-300 rounded w-1/3" />
            <div className="h-4 bg-gray-300 rounded w-1/4" />
            <div className="h-5 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-5 bg-gray-300 rounded w-1/3" />
          </div>
        ) : (
          <>
            <p className='text-[#f6200c] text-[18px]'>
              <Link to={PRODUCT_URL}>{status}</Link>
            </p>
            <p className='text-emerald-600 text-[18px]'>
              <Link to={PRODUCT_URL}>{See}</Link>
            </p>
            <p className='text-[23px]'>
              <Link to={PRODUCT_URL}>{title}</Link>
            </p>
            <p className='text-gray-500'>
              <Link to={PRODUCT_URL}>{size}</Link>
            </p>
            <p className='text-gray-500'>
              <Link to={PRODUCT_URL}>{colornumber}</Link>
            </p>
            <p className='text-xl'>
              <Link to={PRODUCT_URL}>${price}.00</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;

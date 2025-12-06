import React, { useEffect, useState } from 'react'
import Products from '../../data/Products';
import { useParams } from 'react-router';
import ScrollingTicker from '../../Components/scrollingticker/ScrollingTicker';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';
import { IoStar } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiHeartAdd2Line } from "react-icons/ri";
import FAQAccordion from '../../Components/FAQAccordion/FAQAccordion';

const ProductDetalis = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const mainproduct = Products.find(
          (product) => product.id === Number(productId)
        );
        setProduct(mainproduct);
      }, [productId]);
      
  return (
    <>
    <div className='w-full px-8 justify-between flex border-b-2 border-gray-400 overflow-x-hidden'>
      <div className='border-x-2 px-12 py-3 border-gray-400'>
        <Breadcrumb
        links={[
          { id: 1, title: "Home", to: "/" },
          { id: 2, title: "Men", to: "/" },
          { id: 3, title: "Shoes", to: "/" },
          { id: 4, title: product?.title, to: "/" }
        ]}
        />
          <p className='text-4xl py-2.5 font-bold'>{product?.title}</p>
      </div>
      <div className='border-r-2 pt-5 border-gray-400 w-[200px] text-right'>

      </div>
    </div>
    <div className='w-full'>
      <div className='flex p-5 justify-between mx-8 border-gray-400 border-x-2'>
        <div className='flex w-135'>
          <img className='object-cover' src={product?.src} />
        </div>
        <div>
          <div>
            <div>
              <p className='text-4xl py-2.5 font-bold'>JUST DO IT</p>
              <div className='flex items-center gap-4'>
                <div className='flex text-2xl text-yellow-500 gap-1'>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <p className='text-lg font-semibold text-gray-500/80'>47 reviews</p>
              </div>
              <h1 className='my-8 text-5xl font-semibold'>{product?.price}</h1>
              <p className='font-semibold text-gray-500'>color · White</p>
              <div className="flex gap-3 my-5 overflow-x-auto *:w-[90px] *:h-[90px] *:rounded-lg">
                <img src="/img/item1-1.avif"/>
                <img src="/img/item1-2.avif"/>
                <img src="/img/item1-3.avif"/>
                <img src="/img/item1-4.avif"/>
              </div>
              <p className='font-semibold'>Size</p>
              <div className='flex gap-3 mt-2 *:py-2 *:px-5 font-semibold *:border-2 *:rounded-lg *:border-black/25'>
                <p>40</p>
                <p>41</p>
                <p className='bg-black text-white'>42</p>
                <p>43</p>
                <p>44</p>
                <p>45</p>
              </div>
              <div className='py-3 *:font-semibold text-gray-600'>
                <p className='text-green-700'>{product?.See || product?.status}</p>
                <p>{product?.size}</p>
                <p>{product?.colornumber}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
            <div>
              <button className='flex justify-center rounded-sm items-center gap-2.5 bg-black text-lg text-white font-semibold w-full py-2.5'>
                <FiShoppingBag className='text-2xl'/>Add to Bag
              </button>
              <button className='flex justify-center rounded-sm items-center mt-5 gap-2 text-lg border-2 font-semibold w-full py-2.5'>
                <RiHeartAdd2Line className='text-2xl'/>Favorite
              </button>
              <FAQAccordion />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetalis;
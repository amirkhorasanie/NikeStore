import React, { useEffect, useState } from 'react';
import ProductsData from '../../data/Products';
import { useParams } from 'react-router';
import { useOutletContext } from 'react-router';
import Breadcrumb from '../../Components/BreadCrumb/BreadCrumb';
import { IoStar } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiHeartAdd2Line } from "react-icons/ri";
import FAQAccordion from '../../Components/FAQAccordion/FAQAccordion';

  const ProductDetalis = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { addToCart } = useOutletContext(); // استفاده از cart و addToCart اصلی

    useEffect(() => {
        const mainProduct = ProductsData.find(
            (product) => product.id === Number(productId)
        );
        setProduct(mainProduct);
    }, [productId]);

    return (
        <div className="max-w-screen-3xl mx-auto">
            <div className='w-full px-8 flex border-b-2 border-gray-400 dark:border-neutral-600'>
                <div className='border-x-2 px-6  py-3 border-gray-400 dark:border-neutral-600 flex-1'>
                    <Breadcrumb
                        links={[
                            { id: 1, title: "Home", to: "/" },
                            { id: 2, title: "Men", to: "/" },
                            { id: 3, title: "Shoes", to: "/" },
                        ]}
                    />
                    <p className='text-4xl py-2.5 font-bold'>{product?.title}</p>
                </div>
            </div>

            <div className='w-full'>
                <div className='p-5 mx-8 border-gray-400 dark:border-neutral-600 border-x-2 grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    <div className='lg:col-span-5'>
                        <img className='w-full h-auto object-cover dark:brightness-75 rounded-lg' src={product?.src} alt={product?.title} />
                    </div>

                    <div className='lg:col-span-4'>
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
                            
                            <div className="flex gap-3 *:dark:brightness-75 my-5 overflow-x-auto pb-2">
                                <img className="w-[90px] h-[90px] rounded-lg object-cover flex-shrink-0 border border-gray-200 cursor-pointer hover:border-black" src="/item1-1.avif" alt="variant 1"/>
                                <img className="w-[90px] h-[90px] rounded-lg object-cover flex-shrink-0 border border-gray-200 cursor-pointer hover:border-black" src="/item1-2.avif" alt="variant 2"/>
                                <img className="w-[90px] h-[90px] rounded-lg object-cover flex-shrink-0 border border-gray-200 cursor-pointer hover:border-black" src="/item1-3.avif" alt="variant 3"/>
                                <img className="w-[90px] h-[90px] rounded-lg object-cover flex-shrink-0 border border-gray-200 cursor-pointer hover:border-black" src="/item1-4.avif" alt="variant 4"/>
                            </div>

                            <p className='font-semibold'>Size</p>
                            <div className='flex flex-wrap gap-3 mt-2 font-semibold'>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 cursor-pointer hover:border-black'>40</p>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 cursor-pointer hover:border-black'>41</p>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 bg-black text-white cursor-pointer'>42</p>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 cursor-pointer hover:border-black'>43</p>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 cursor-pointer hover:border-black'>44</p>
                                <p className='py-2 px-5 border-2 rounded-lg border-black/25 cursor-pointer hover:border-black'>45</p>
                            </div>
                            <div className='py-3 *:font-semibold text-gray-600 mt-4'>
                                <p className='text-green-700'>{product?.See || product?.status}</p>
                                <p>{product?.size}</p>
                                <p>{product?.colornumber}</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-3'>
                        <div className="sticky top-4">
                            <button onClick={() => addToCart(product)} className='flex cursor-pointer hover:rounded-4xl justify-center rounded-sm items-center gap-2.5 bg-black text-lg text-white dark:bg-white dark:text-black font-semibold w-full py-2.5 hover:bg-black/80 dark:hover:bg-white/60 transition-colors'>
                                <FiShoppingBag className='text-2xl' />Add to Bag
                            </button>
                            <button className='flex hover:rounded-4xl justify-center rounded-sm items-center mt-5 gap-2 text-lg border-2 font-semibold w-full py-2.5 hover:bg-gray-100/20 transition-colors'>
                                <RiHeartAdd2Line className='text-2xl' />Favorite
                            </button>
                            <div className="mt-8">
                                <FAQAccordion />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetalis;

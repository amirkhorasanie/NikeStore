import React from 'react'
import Product from '../Product/Product'
import { IoIosArrowDown } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";

const Products = ({ products = [] }) => {
    return (
        <>
        <section className='flex px-8 w-full border-b-2 border-gray-400'>
        <div className='border-x-2 border-gray-400'>
          {products.length ? (
            <div className='flex flex-wrap items-center justify-center'>
                {products.map((product) => (
                    <Product {...product} key={product.id} />
                ))}
            </div>
          ) : (
            <p>There are no products !!</p>
          )}
        </div>
        </section>

        </>
      );
    }

export default Products;
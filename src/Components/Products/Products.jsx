import React from 'react';
import Product from '../Product/Product';
import { useOutletContext } from 'react-router';

const Products = ({ products = [] }) => {
    const { addToCart } = useOutletContext(); // استفاده از addToCart اصلی
    const {addToFavorite} = useOutletContext();
    
    return (
        <section className='flex flex-wrap justify-center w-full'>
            <div className='mx-5'>
                <div className='w-full border-x-2 border-b-2 border-neutral-600 max-w-8xl'>
                    {products.length ? (
                        <div className='flex flex-wrap justify-center'>
                            {products.map(product => (
                                <div key={product.id} className='w-full sm:w-150 lg:w-1/3 xl:w-1/4 pt-1.5'>
                                    <Product 
                                      {...product} 
                                      addToCart={() => addToCart(product)}
                                      addToFavorite={() => addToFavorite(product)}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-center'>There are no products !!</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;

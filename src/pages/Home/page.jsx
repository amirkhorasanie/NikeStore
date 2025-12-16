import React, { useEffect, useState } from 'react'
import ExploreCollection from '../../Components/ExploreCollection/ExploreCollection';
import Products from '../../Components/Products/Products';
import productsData from './../../data/Products'
import FilterBar from '../../Components/FilterBar/FilterBar';
import SearchInput from '../../Components/SearchInput/SearchInput';

const Home = () => {

  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([...productsData])
  
  const handleSearch = () => {
    const foundedProducts = productsData.filter((products) =>
      products.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(foundedProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);
  return (
    <div>
    <ExploreCollection />
    <div className='flex w-full border-y-2 px-5 items-center dark:border-neutral-600 border-gray-400 justify-between h-20'>
        <FilterBar/>
        <SearchInput
          inputValue={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
    </div>
    <Products products={products}/>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Home;
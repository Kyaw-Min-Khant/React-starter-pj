import React from 'react'
import { useGetProductByNameQuery } from '../services/products'
import Product from './Product'
import { Link } from 'react-router-dom'
const Productpage = () => {
    const {data:products}=useGetProductByNameQuery()
  return (
    <div>  
        <div className=" flex justify-center py-5">
          <Link to="/form">
          <button className="px-4 bg-red-800 text-white font-semibold rounded-sm py-2">
            Create
          </button>
           </Link>
        </div>
      <div className="flex justify-around md:justify-center flex-wrap gap-8">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Productpage
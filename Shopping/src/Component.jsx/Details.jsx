import React from 'react'
import { useSelector } from 'react-redux'
import { useGetOneItemQuery } from '../services/products'
import { useParams } from 'react-router-dom'
import Product from './Product'

const Details = () => {
  const {id}=useParams();
 const {data:item}=useGetOneItemQuery(id);
 console.log(item)
  return (
    <div className='flex justify-center'>
        <Product key={id} {...item}/>
    </div>
  )
};
export default Details
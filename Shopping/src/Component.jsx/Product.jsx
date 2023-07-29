import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_DETAILS } from '../features/CounterSlice';
import { useDeleteProductMutation } from '../services/products';

const Product = (props) => {
  const [deleteProduct]=useDeleteProductMutation();
    const dispatch=useDispatch();
    const {image,name,price,company,id}=props;
    const deleteHandler=(e)=>{
      e.preventDefault();
      deleteProduct(id);
    }
  return (
    <div className="w-[200px] md:w-[250px] border shadow">
      <Link to={`/details/${id}`}>
        <img
          onClick={() => dispatch(ADD_DETAILS(props))}
          src={image}
          className="h-[200px] md:w-[250px] md:h-[250px] object-cover w-[200px]"
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-lg text-slate-800 font-medium capitalize">
          {name}{" "}
          <span className=" text-sm text-slate-500 capitalize">{company}</span>
        </h3>
        <h3 className="">${price}</h3>
        <h3 className=""></h3>
      </div>
      <Link to={`/update/${id}`}>
        <div className="px-2  text-center hover:bg-red-500 bg-red-800 rounded text-white">
          Edit
        </div>
      </Link>
      <div className=" flex gap-3">
        <button className="my-2 hover:bg-red-500 bg-red-800 rounded text-white items-center mx-auto block px-3 py-1">
          Add to Card
        </button>
        <button
          onClick={deleteHandler}
          className="my-2 hover:bg-red-500 bg-red-800 rounded text-white items-center mx-auto block px-3 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product
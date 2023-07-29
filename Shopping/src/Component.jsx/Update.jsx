import React, { useEffect, useState } from "react";
import { useUpdateProductMutation,useGetOneItemQuery } from "../services/products";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { data: blog } = useGetOneItemQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = { title, image, price, desc, review, category, company };
    console.log(newData);
    updateProduct(newData);
    nav("/");
  };
  useEffect(() => {
    setTitle(blog?.name);
    setImage(blog?.image);
    setPrice(blog?.price);
    setCategory(blog?.category);
    setDesc(blog?.description), setReview(blog?.reviews);
    setCompany(blog?.company);
  }, [blog]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="flex w-[400px] bg-slate-100 border shadow flex-col gap-y-4 p-5"
      >
        <h2 className="text-xl text-center">Update Blog</h2>
        <input
         defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Text ...."
        />
        <input
         defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Image Url...."
        />
        <input
         defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Price"
        />
        <input
         defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Description...."
        />
        <input
         defaultValue={review}
          onChange={(e) => setReview(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Reviews"
        />
        <input
         defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Category"
        />
        <input
          type="text"
         defaultValue={company}
          onChange={(e) => setCompany(e.target.value)}
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Company"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-700 hover:bg-red-900 text-white font-medium"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;

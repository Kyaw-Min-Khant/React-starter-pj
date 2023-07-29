import React, { useState } from "react";
import { useAddProductMutation } from "../services/products";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const nav = useNavigate();
  const [addProduct] = useAddProductMutation();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title,
      image,
      price,
      desc,
      review,
      category,
      company,
    };
    nav("/");
    addProduct(data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="flex w-[400px] bg-slate-100 border shadow flex-col gap-y-4 p-5"
      >
        <h2 className="text-xl text-center">Create Blog</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Text ...."
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Image Url...."
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Price"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Description...."
        />
        <input
          value={review}
          onChange={(e) => setReview(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Reviews"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Category"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className=" border-b-4 border-b-grey-500 py-2"
          placeholder="Company"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-700 hover:bg-red-900 text-white font-medium"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;

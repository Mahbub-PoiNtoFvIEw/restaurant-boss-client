import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async(data) => {
    console.log(data)
    // image upload to the imageBB and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers:{
        'content-type': 'multipart/form-data'
      }
    })
    if(res.data.success){
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        reset();
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: `A ${data.category} item added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    // console.log(res.data)
  };
  return (
    <div>
      <SectionTitle
        Heading="Add An Item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#E8E8E8] md:p-10 p-2 space-y-4 md:mx-20">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe Name*</span>
              </label>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name", {required: true})}
                className="input input-bordered w-full"
              />
            </div>
            <div className="md:flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                defaultValue="default"
                  {...register("category", {required: true})}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", {required: true})}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
              {...register("recipe", {required: true})}
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="form-control w-full">
              <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
            </div>
            <button className="flex items-center py-2 px-4 gap-2 cursor-pointer bg-linear-to-r from-[#835D23] to-[#B58130] text-white font-bold">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

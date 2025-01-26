import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 py-1 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-[#111827] bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-b-[#BB8506] mt-4 rounded-lg uppercase">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

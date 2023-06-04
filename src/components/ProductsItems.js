import React from "react";

const ProductsItems = ({ product }) => {
  return (
    <div className="">
      <div
        className="flex flex-col rounded overflow-hidden shadow-md "
        key={product.id}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover"
        />
        <div className="m-4 flex flex-col ">
          <p className="font-bold">{product.name}</p>
          <p className="mt-2 text-neutral-500">{product.price}</p>
          <p className="mt-2">{product.description}</p>
          <div className="flex justify-center font-bold mt-2">
            <a href="#" className="bg-neutral-300 py-2 px-5 rounded">
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;

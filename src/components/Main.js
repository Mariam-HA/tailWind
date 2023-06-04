import React from "react";
import ProductsItems from "./ProductsItems";
import products from "../products";

const Main = () => {
  const productsList = products.map((product) => (
    <ProductsItems product={product} />
  ));
  return (
    <div className="px-16 py-6 ">
      <p className="font-bold mt-12 border-b border-cyan-900 text-xl ">
        Most Popular Dishes
      </p>
      <div className="">
        <div className="flex ">
          <div className="mt-8 space-y-12  ">{productsList}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

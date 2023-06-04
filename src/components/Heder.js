import React from "react";
import image1 from "../assest/media/seaFood.jpeg";

const Heder = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className=" text-center text-5xl text-neutral-700 font-bold border-b border-cyan-900">
        The Coasteal Catch
      </h1>
      <h4 className="text-justify text-xl text-neutral-950 font-semibold mt-8">
        A seafood lover's paradise, offering a tempting selection of freshly
        caught delights from the ocean, expertly prepared with a creative twist
        that highlights the natural flavors of the sea.
      </h4>
      <img
        src={image1}
        alt=""
        className="mt-8 w-4/6 text-center rounded shadow-md"
      />
    </div>
  );
};

export default Heder;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const ProductCard = ({productImage , productPrice , productName , productDescriptions }) => {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={productImage}
        alt=""
        className="aspect-[16/10] rounded"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[14px]">{productName}</p>
          <b className="text-lg font-medium">{productPrice}</b>
        </div>
        <h1 className="text-[20px] text-black">
          {productDescriptions}
        </h1>
        <NavLink to="/details" className="text-cerulean flex items-center gap-1">
          Read more <HiArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;

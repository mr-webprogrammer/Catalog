import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NewsCard = ({  NewsImageLink , newsTitle , NewsDate , NewsId}) => {



  return (
    <div className="flex flex-col gap-3">
      <img
        src={NewsImageLink}
        alt=""
        className="aspect-[16/10] rounded"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-start items-center">
          <p className="font-normal text-[14px]">{new Date(NewsDate).toLocaleDateString() }</p>
        </div>
        <h1 className="text-[20px] text-black">
          {newsTitle}
        </h1>
        <NavLink   to={`/:catalog/:subcatalog/${NewsId}`} className="text-cerulean flex items-center gap-1">
          Read more <HiArrowNarrowRight />
        </NavLink>
      </div>

    </div>
  );
};

export default NewsCard;

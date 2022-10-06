import React from "react";
import { quotes } from "../assets";
import { feedback } from "../constants/constants";

const FeedBackCard = ({ content, name, title, img }) => (
  <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <img
      src={quotes}
      alt="double quotes"
      className="h-[27px] w-[42px] object-contain"
    />
    <p className="my-10 font-poppins text-[18px] font-normal leading-[32px] text-white">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      {/* Contain the name and title of testifiers */}
      <div className="ml-4 flex flex-col">
        <h4 className="text-[20px] font-semibold leading-[32px] text-white">
          {name}
        </h4>
        <p className="text-[16px]leading-[24px] font-poppins font-normal text-dimWhite">
          Hello
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;

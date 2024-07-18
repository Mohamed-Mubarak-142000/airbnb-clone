import React from "react";
import { ExploreItem } from "../types/app";
import Image from "next/image";
type ExploreCardProps = ExploreItem;

const ExploreCard = ({ img, location, distance }: ExploreCardProps) => {
  return (
    <div className=" flex gap-2 items-center w-100 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:border hover:scale-105 hover:transform hover:cursor-pointer hover:transition-all duration-100 ease-in-out">
      <div className="w-[120px] h-[100px]">
        <Image
          loading="lazy"
          src={img}
          alt="image_pro"
          width={100}
          height={100}
          className="w-full rounded-l-lg h-full"
        />
      </div>

      <div className=" pt-1">
        <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {distance}
        </h5>
        <h6 className="block font-sans text-base font-light ">{location}</h6>
      </div>
    </div>
  );
};

export default ExploreCard;

import React from "react";
import { LiveItem } from "../types/app";
import Image from "next/image";
type LiveDataProps = LiveItem;
const LiveCard = ({ img, title }: LiveDataProps) => {
  return (
    <div className="border-red-300 shadow-xl border-2 rounded-lg p-1 text-center cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className=" w-[300px] lg:w-[450px] h-[300px] relative ">
        <Image
          src={img}
          alt="image_pro"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-lg my-3">{title}</h1>
    </div>
  );
};

export default LiveCard;

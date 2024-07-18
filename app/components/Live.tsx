import React from "react";
import MainHeading from "./MainHeading";
import { getLiveData } from "../utils/api";
import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";

const Live = async () => {
  const liveData: LiveData = await getLiveData();
  console.log("fff", liveData);

  return (
    <section className="container my-5 py-5">
      <MainHeading title="Live anywhere:" />

      <div className="my-2 py-7 -ml-3 flex space-x-4 overflow-scroll no-scrollbar ">
        {liveData.map((item, index) => {
          return <LiveCard key={index} img={item.img} title={item.title} />;
        })}
      </div>
    </section>
  );
};

export default Live;

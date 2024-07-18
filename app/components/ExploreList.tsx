import React from "react";
import ExploreCard from "./ExploreCard";
import { getExplore } from "../utils/api";
import { ExploreData } from "../types/app";
import MainHeading from "./MainHeading";
const ExploreList = async () => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section className="py-5">
      <div className="container">
        <MainHeading title="explore nearby:" />
        <div className="mt-5 pt-5 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item, index) => {
            return (
              <ExploreCard
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreList;

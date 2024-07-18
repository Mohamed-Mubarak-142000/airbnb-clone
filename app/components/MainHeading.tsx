import React from "react";

const MainHeading = ({ title }: { title: string }) => {
  return <h1 className="py-2 text-[30px] capitalize font-bold">{title}</h1>;
};

export default MainHeading;

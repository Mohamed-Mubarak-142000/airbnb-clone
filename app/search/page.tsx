import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getResultData } from "../utils/api";
import { SearchResultData } from "../types/app";
import MainHeading from "../components/MainHeading";
import OneSearchResult from "../components/OneSearchResult";
import Map from "../components/Map";
type SearchParamsProps = {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuest: string;
};

const page = async ({
  searchParams: { location, startDate, endDate, numberOfGuest },
}: {
  searchParams: SearchParamsProps;
}) => {
  let formatedStartDate;
  let formatedEndDate;

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const resDataSearch: SearchResultData = await getResultData();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest} guest`} />
      <section className="container my-5">
        <div>
          <MainHeading title={"Search Result:"} />
        </div>

        <p className="text-gray-500 text-sm">{`+300 stays | ${location} | ${range} | ${numberOfGuest} Guest`}</p>

        <div className=" my-10 gap-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {resDataSearch.map((item, index) => {
            return (
              <OneSearchResult
                key={index}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star} 
                price={item.price}
                total={item.total}
              />
            );
          })}
        </div>

        <div className="h-[400px] w-full rounded-lg">
          <Map resDataSearch={resDataSearch} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;

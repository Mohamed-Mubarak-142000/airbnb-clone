"use client";
import React, { useState } from "react";
import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import Link from "next/link";

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGest, setNumberOfGest] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const handleCancel = () => {
    setInput("");
  };

  return (
    <div className="hidden lg:flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder || "start your search"}
        className="text-gray-600 text-sm placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

      {input && (
        <div className="absolute top-[100%] mt-5 rounded shadow-lg left-[50%] translate-x-[-50%] ">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />

          <div className="flex items-center justify-between p-2 bg-white border-t-gray-200 border-t">
            <h1>Number of Guest</h1>

            <div className="flex gap-1 items-center">
              <input
                type="number"
                min={1}
                value={numberOfGest}
                onChange={(e) => setNumberOfGest(+e.target.value)}
                className="w-[50px] border rounded text-center outline-none"
              />
              <UserCircleIcon className="h-6 text-red-400" />
            </div>
          </div>

          <div className="flex items-center justify-around gap-2 p-3 bg-white">
            <button
              onClick={handleCancel}
              type="button"
              className="border hover:border-gray-200 w-1/2 p-2 hover:shadow-sm"
            >
              Cancel
            </button>
            <Link
              onClick={handleCancel}
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numberOfGuest=${numberOfGest}`,
              }}
              className=" w-1/2 p-2 text-center text-red-500 hover:bg-red-400 hover:text-white hover:border-none hover:transition duration-100 hover:shadow-md hover:rounded"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

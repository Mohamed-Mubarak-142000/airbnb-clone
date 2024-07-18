"use client";
import React, { useState } from "react";
import { SearchResultItem } from "../types/app";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
type NeSearchResultProps = Omit<SearchResultItem, "long" | "lat">;
const OneSearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: NeSearchResultProps) => {
  const [wishList, setWishList] = useState(true);

  const handleToggle = () => {
    setWishList(!wishList);
  };

  return (
    <div className="block rounded-lg relative p-4 w-[90%] mx-auto lg:w-[350px] shadow-sm shadow-indigo-100">
      <div className=" relative h-[200px]">
        <Image
          loading="lazy"
          alt="image_pro"
          src={img}
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">title</dt>

            <dd className="text-md">{title}</dd>
          </div>

          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">{price}</dd>
          </div>

          <div>
            <dt className="sr-only">total</dt>

            <dd className="text-sm text-gray-500">{total}</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">{location}</dd>
          </div>

          <div>
            <dt className="sr-only">description</dt>

            <dd className="font-medium my-2 text-gray-600">{description}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>

              <p className="font-medium">2 spaces</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>

              <p className="font-medium">2 rooms</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bedroom</p>

              <p className="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>

      {wishList ? (
        <div
          onClick={handleToggle}
          className={`size-7 absolute top-2 right-1 animate-bounce`}
        >
          <HeartIcon />
        </div>
      ) : (
        <div
          onClick={handleToggle}
          className={`size-7 text-red-600 absolute top-2 right-1`}
        >
          <HeartIconSolid />
        </div>
      )}
    </div>
  );
};

export default OneSearchResult;

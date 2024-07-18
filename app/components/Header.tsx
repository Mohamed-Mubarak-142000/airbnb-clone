import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "../../public/logo.png";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
const Header = ({ placeholder }: { placeholder?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg py-5">
      <div className="container flex items-center justify-between lg:grid lg:grid-cols-3 relative ">
        <Link href={"/"} className="relative flex items-center h-10 my-auto">
          <Image
            width={200}
            height={100}
            className="object-contain object-left"
            alt="image_logo"
            src={logoImage}
          />
        </Link>
        <SearchBar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

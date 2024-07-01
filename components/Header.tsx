import { BookOpenIcon, FilePenIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" relative p-16 text-center">
      <Link href={""}>
        <h1 className=" text-6xl font-bold text-black">
          LoreLoom - An AI Story Teller.
        </h1>
        <div className=" flex space-x-5 justify-center whitespace-nowrap text-3xl lg:text-5xl">
          <h2 className=" font-serif ">
            Bringing stories in life through AI....
          </h2>
        </div>
      </Link>

      <div className=" flex space-x-2 absolute top-5 right-10">
        <Link href={""}>
          <FilePenIcon className=" w-8 h-8 lg:w-10 lg:h-10 mx-auto text-orange-600 mt-10 border border-orange-600 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
        <Link href={""}>
          <BookOpenIcon className=" w-8 h-8 lg:w-10 lg:h-10 mx-auto text-orange-600 mt-10 border border-orange-600 p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

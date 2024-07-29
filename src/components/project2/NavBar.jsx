import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="py-5 px-10">
      <div className="flex justify-around">
        <h1 className="md:text-4xl text-2xl  hover:underline sm:mr-0 mr-5">
          STYLE
        </h1>

        <div className="flex gap-6 ">
          <Link href="#" className="md:text-3xl  hover:underline">
            Home
          </Link>
          <Link href="#" className="md:text-3xl  hover:underline">
            Men
          </Link>
          <Link href="#" className="md:text-3xl  hover:underline">
            Women
          </Link>
          <Link href="#" className="md:text-3xl  hover:underline">
            Kids
          </Link>
        </div>
      </div>
    </div>
  );
}

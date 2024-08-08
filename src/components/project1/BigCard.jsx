import React from "react";
import Link from "next/link";

export default function BigCard() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-12">
        <div className="col-span-12 bg-orange-300 p-20 rounded-lg">
          <h1 className="text-2xl sm:text-5xl">
            Ready to prepare your future Ride?
          </h1>
          <button className="bg-white text-black rounded-full p-3 mt-5">
            <Link href={"/"}>Contact us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

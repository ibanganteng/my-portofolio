import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="p-16 bg-slate-700 text-white">
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-2xl">Baby Wonder</h1>

        <div className="flex gap-6">
          <Link href="#" className="md:text-3xl">
            Home
          </Link>
          <Link href="#" className="md:text-3xl">
            About
          </Link>
          <Link href="#" className="md:text-3xl">
            Specialis
          </Link>
        </div>
      </div>
    </div>
  );
}

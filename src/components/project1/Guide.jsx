import React from "react";

export default function Guide() {
  return (
    <div className="m-10">
      <div className="grid sm:grid-cols-12">
        <div className="sm:col-span-3 ">
          <h1 className=" text-2xl sm:text-7xl text-wrap">
            Experience the future of vehicles
          </h1>
          <button className="bg-black text-white p-5 rounded-xl my-8">
            Learn more
          </button>
        </div>
        <div className="sm:col-span-9 my-10"></div>
      </div>
    </div>
  );
}

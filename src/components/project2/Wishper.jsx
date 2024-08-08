import React from "react";

export default function Wishper() {
  return (
    <div className="bg-black  ">
      <div className="grid sm:grid-cols-12 m-20">
        <div className="  sm:col-span-6">
          <div>
            <h4 className="text-2xl text-white py-5">Switch to</h4>
            <h1 className="text-4xl text-white ">
              vehicles and contribute to a greener future
            </h1>
            <p className="text-white py-5">
              by choosing Ford vihicles,you can Experience the benefite of clean
              sustainable transportation today
            </p>
          </div>
        </div>
        <div className="  sm:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmb3JkfGVufDB8fDB8fHww"
            alt=""
            className=" sm:w-[500px] sm:h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

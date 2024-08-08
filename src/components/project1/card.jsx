import React from "react";

export default function Card() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 my-10">
        <div className="sm:col-span-4 col-span-1 bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <p className="font-bold sm:text-xl pb-10">
              Electric vehicles benefits
            </p>
          </div>
          <div>
            <button className="text-gray-600 text-2xl">→</button>
          </div>
        </div>
        <div className="sm:col-span-4 col-span-1 bg-white shadow-lg rounded-lg p-6 pb-20 flex items-center justify-between">
          <div>
            <p className="font-bold sm:text-xl pb-10">
              friendly transportation
            </p>
          </div>
          <div>
            <button className="text-gray-600 text-2xl">→</button>
          </div>
        </div>
        <div className="sm:col-span-4 col-span-1 bg-black text-white shadow-lg rounded-lg p-6 flex flex-col items-start ">
          <div>
            <p className="font-bold text-xl text-yellow-500">Cost efficiency</p>
          </div>
          <div className="mt-auto">
            <p className="text-4xl">25%</p>
            <p>more cost effective.</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.Bu-rxJuZtKebfUGJx_ZEaAHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7"
          alt=""
          className="w-full h-full bg-cover max-h-screen max-w-screen-lg mx-auto"
        />
      </div>
    </div>
  );
}

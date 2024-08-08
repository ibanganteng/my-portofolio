import React from "react";

export default function Card2() {
  return (
    <div className="m-10">
      <div className="grid  sm:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 bg-black text-white p-6 flex flex-col justify-between">
          <div className="text-right">
            <h4 className="text-sm uppercase tracking-widest text-yellow-500">
              Eco-Motion
            </h4>
            <h1 className="text-4xl font-bold">Riding the Wave</h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1587225175140-1a251966146f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGZvcmR8ZW58MHx8MHx8fDA%3D"
            alt="Electric Vehicle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12">
          <img
            src="https://images.unsplash.com/photo-1582438936699-b4104a93ddf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxmb3JkfGVufDB8fDB8fHww"
            alt="Detailed View of Electric Vehicle"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

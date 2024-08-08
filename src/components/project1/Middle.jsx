import React from "react";

export default function Middle() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <button className="p-2 bg-gray-300 rounded-full">
            <span className="text-xl">→</span>
          </button>
          <h1 className="text-2xl font-bold">
            Uncover the powerful technology driving electric vehicles
          </h1>
        </div>
        <p className="mb-4">
          Vehicles are totally powered by gasoline, which makes them the super
          sustainable and friendly choice in transportation.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-300 rounded-full">
              <span className="text-xl">→</span>
            </button>
            <h2 className="font-semibold">Contribution to green energy</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-300 rounded-full">
              <span className="text-xl">→</span>
            </button>
            <div>
              <h2 className="font-semibold">Efficiency and performance</h2>
              <p>
                Vehicles provide impressive acceleration and torque, offering a
                smooth driving experience with energy efficiency.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-300 rounded-full">
              <span className="text-xl">→</span>
            </button>
            <h2 className="font-semibold">Charging infrastructure</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

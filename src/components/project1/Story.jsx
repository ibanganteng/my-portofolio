import React from "react";

export default function Story() {
  return (
    <div className="m-10">
      <div className="grid sm:grid-cols-12">
        <div className="sm:col-span-3 "></div>
        <div className="sm:col-span-9 my-10">
          <h1 className=" text-2xl sm:text-7xl text-wrap">
            With zero emissions and advanced technology,our cars are paving the
            way towards a greener future.
            <span className="text-gray-500">
              Join ud we drive towards a cleaner,more sustainable tumorrow
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

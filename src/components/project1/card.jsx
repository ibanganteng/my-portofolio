import React from "react";

export default function Card() {
  return (
    <div
      id="service"
      className="flex flex-col md:flex-row gap-8 justify-center items-center bg-gradient-to-r from-[#4E5F4F] to-[#e6e4dd] py-10 px-4
    "
    >
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="car3.jpg" alt="Car" className="h-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car - 1</h2>
          <p>Klick below to get inform for this car</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="car1.jpg" alt="Car" className="h-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car - 2</h2>
          <p>Klick below to get inform for this car</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="car2.jpg" alt="Car" className="h-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car -3</h2>
          <p>Klick below to get inform for this car</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

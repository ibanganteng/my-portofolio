import React from "react";

export default function Hero() {
  return (
    <>
      <nav className="p-8 navbar fixed top-0 left-0 right-0 z-10 bg-transparent ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">My Car</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero bg-base-200 min-h-screen bg-[url('/car.jpg')] vw-100 ">
        <div className=" text-start">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold  text-white font-serif  whitespace-nowrap">
              FEEL YOUR JOURNEY
            </h1>
            <p className="py-6 text-2xl font-serif text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-ghost text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

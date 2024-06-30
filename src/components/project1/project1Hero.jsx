import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <nav className="p-4 md:p-8 navbar fixed top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg md:text-xl font-bold">My Car</div>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="/project1" className="text-white text-sm md:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-sm md:text-base">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="text-white text-sm md:text-base">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-sm md:text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero bg-base-200 min-h-screen bg-[url('/car.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-start px-4 md:px-8 lg:px-16">
          <div className="max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif whitespace-nowrap">
              FEEL YOUR JOURNEY
            </h1>
            <p className="py-4 md:py-6 text-lg md:text-2xl font-serif text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-ghost text-white">
              <Link href="/">Back to Portfolio</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

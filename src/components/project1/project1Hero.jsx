"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`p-4 md:p-8 navbar fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${
          isScrollingUp ? "transform-none" : "-translate-y-full"
        } bg-transparent`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white md:text-4xl sm:text-xxl font-bold">
            My Car
          </div>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <a href="/project1" className="text-white md:text-2xl ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white md:text-2xl ">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="text-white md:text-2xl ">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white md:text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero bg-base-200 w-full min-h-screen  bg-[url('/car.jpg')] sm:bg-cover bg-center flex items-center justify-center">
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

"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"; // Import FaBars icon

export default function Hero() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Ref for the nav menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Function to check if click is outside the menu
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu if click outside
      }
    };

    // Listen for clicks to close menu
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [lastScrollTop, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`p-4 md:p-8 fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${
          isScrollingUp ? "transform-none" : "-translate-y-full"
        } bg-transparent`}
        ref={navRef} // Set ref for the nav
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white md:text-4xl sm:text-xxl font-bold">
            My Car
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
          <div
            className={`md:flex ${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex-row md:space-x-4 absolute sm:top-6 top-full right-3 sm:right-20 bg-transparent md:bg-transparent w-full md:w-auto text-right`}
          >
            <a href="/project1" className="text-white md:text-2xl mt-2 md:mt-0">
              Home
            </a>
            <a href="#about" className="text-white md:text-2xl mt-2 md:mt-0">
              About
            </a>
            <a href="#service" className="text-white md:text-2xl mt-2 md:mt-0">
              Services
            </a>
            <a href="#" className="text-white md:text-2xl mt-2 md:mt-0">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="hero bg-base-200 w-full min-h-screen min-w-screen bg-[url('/car.jpg')] sm:bg-cover bg-center flex items-center justify-center">
        <div className="text-start px-4 md:px-8 lg:px-16">
          <div className="max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-2xl md:text-6xl font-bold text-white font-serif whitespace-nowrap">
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

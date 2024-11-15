"use client";

import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Link from "next/link";

// const PDF_FILE_URL = "/file_pdf.pdf";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const strings = ["Mochammad Ridwan", " Full-Stack Developer"];

  useEffect(() => {
    let timer;
    const currentString = strings[loopNum % strings.length];

    if (!isDeleting && index === currentString.length) {
      setTimeout(() => setIsDeleting(true), 500);
      setTypingSpeed(50);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentString.substring(0, index));
        setIndex(index + (isDeleting ? -1 : 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, loopNum, typingSpeed]);

  // const downloadFileURL = (url) => {
  //   const fileName = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   document.body.removeChild(aTag);
  // };

  return (
    <section className="bg-white text-black py-20 bg-cover bg-center min-h-screen flex flex-col justify-center border-none">
      <div className="container mx-auto h-full grid sm:grid-cols-2 sm:items-center mb-10">
        {/* Move the image to the top on smaller screens */}
        <div className="order-1 sm:order-2 ml-0 sm:ml-20">
          <img src="/ibang.png" alt="" width={500} height={500} />
        </div>
        <div className="order-2 sm:order-1 text-left w-full md:w-2/3 lg:w-1/2 sm:pl-20 pl-10 mb-1.5 sm:mb-10">
          <h1 className="text-2xl sm:text-5xl font-bold">
            Hello! I'm {""}
            <br />
            <span
              className="bg-[#2E2E5C] text-white"
              style={{ minWidth: "280px" }}
            >
              {typedText}
            </span>
          </h1>
          <p className="sm:mt-10 mt-3 sm:text-5xl text-3xl text-left flex-wrap">
            Experienced in building web applications with a strong background in
            various technologies.
          </p>
          <button className="mt-6 text-white">
            <Link href={"#contact"} className="btn btn-primary">
              Contact me
            </Link>
          </button>
        </div>
      </div>
      <Skills />
    </section>
  );
}

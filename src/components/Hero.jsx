"use client";

import Skills from "./Skills";

const PDF_FILE_URL = "file_pdf.pdf";

export default function Hero() {
  const downloadFileURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <section
      className="bg-slate-200 text-black py-20 bg-cover bg-center min-h-screen flex flex-col justify-center border-none"
      style={{ backgroundImage: "url('/bgt.png')" }}
    >
      <div className="container mx-auto h-full sm:flex sm:items-center">
        <div className="text-left w-full md:w-2/3 lg:w-1/2 px-10 mr-20">
          <h1 className="text-5xl font-bold">
            Hello! <br />
            I'm Mochammad Ridwan
          </h1>
          <p className="mt-4 text-3xl">Full Stack Developer</p>
          <p className="mt-2 text-2xl flex-wrap">
            Experienced in building web applications with a strong background in
            various technologies.
          </p>
          <button
            className="mt-6 btn bg-[#2E2E5C] text-white"
            onClick={() => downloadFileURL(PDF_FILE_URL)}
          >
            Click for MY CV
          </button>
        </div>
        <div className="ml-20">
          <img src="/ibang.png" alt="" width={500} height={500} />
        </div>
      </div>
      <Skills />
    </section>
  );
}

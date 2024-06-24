import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#c3c0a4]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <img
            src="/rounded.png"
            alt="Profile"
            className="rounded-full mx-auto w-64 h-64"
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-2/3 md:ml-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Experienced Web Developer with a demonstrated history of working in
            the information technology and services industry. Skilled in PHP,
            SQL, Apache, Angular 2, Node.js, and Linux. Strong knowledge of
            website stacks such as HTML, CSS, JavaScript, jQuery, and AJAX
            technology. Professional with an Engineer’s Degree focused in
            Computer Science Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

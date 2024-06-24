export default function Hero() {
  return (
    <section
      className="bg-slate-200 text-black py-20 bg-cover bg-center   min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('/bgt.png')" }}
    >
      <div className="container mx-auto h-full flex items-center ">
        <div className="text-left w-full md:w-2/3 lg:w-1/2 px-10 mr-20">
          <h1 className="text-5xl font-bold ">
            Hello! <br />
            I'm Mochammad Ridwan
          </h1>
          <p className="mt-4 text-3xl ">Full Stack Developer</p>
          <p className="mt-2 text-2xl flex-wrap">
            Experienced in building web applications with a strong background in
            variousodhsaodhsahdashhxzlkchlkxh
            technologies.kasdhosadhoashdhsaodhosahdash clxzhclh
            hcfxlzkchlkxzhckxzlckxchlkxzhcklxhclhxclxhlck xzlch
          </p>
          <button className="mt-6 btn bg-[#2E2E5C] text-white">
            Contact Me
          </button>
        </div>
        <div className="ml-20">
          <img src="/ibang.png" alt="" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

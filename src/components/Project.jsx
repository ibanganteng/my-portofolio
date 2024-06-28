export default function Projects() {
  return (
    <section id="projects" className="bg-[#2E2E5C]  py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-white shadow-md p-4">
            <img
              src="/project1.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <h3 className="font-bold mt-4">Project 1</h3>
            <p>Description of project 1.</p>
            <a href="#" className="btn btn-primary mt-4">
              View Project
            </a>
          </div>
          <div className="card bg-white shadow-md p-4">
            <img
              src="/project2.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <h3 className="font-bold mt-4">Project 2</h3>
            <p>Description of project 2.</p>
            <a href="#" className="btn btn-primary mt-4">
              View Project
            </a>
          </div>
          <div className="card bg-white shadow-md p-4">
            <img
              src="/project3.jpg"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <h3 className="font-bold mt-4">Project 3</h3>
            <p>Description of project 3.</p>
            <a href="#" className="btn btn-primary mt-4">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="bg-[#2E2E5C] opacity-40 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-white">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "HTML",
            "CSS",
            "Bootstrap",
            "PHP",
            "MySQL",
            "JavaScript",
            "jQuery",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AWS",
            "Google APIs",
          ].map((skill) => (
            <div key={skill} className="card bg-white shadow-md p-4">
              <h3 className="font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  const skillLevels = {
    HTML: 90,
    CSS: 70,
    Tailwind: 75,
    Reactjs: 70,
    MySQL: 75,
    JavaScript: 85,
    GitHub: 70,
    "Node.js": 80,
    "Express.js": 75,
    Posgrestql: 80,
    prisma: 85,
    Nextjs: 90,
  };

  return (
    <section id="skills" className="  border-none py-20 m-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-white">SKILLS</h2>
        <div className="grid grid-cols-3 w-30 md:gap-4 md:grid-cols-4 gap-8">
          {Object.keys(skillLevels).map((skill) => (
            <div key={skill} className="card bg-white shadow-md p-2">
              <h3 className="font-bold">{skill}</h3>
              <input
                type="range"
                name="nilai"
                min="0"
                max="100"
                value={skillLevels[skill]}
                className="w-full h-2 bg-blue-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, blue ${skillLevels[skill]}%, pink ${skillLevels[skill]}%)`,
                  accentColor: "#1E40AF",
                }}
              />
              <label htmlFor="">{`${skillLevels[skill]}%`}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

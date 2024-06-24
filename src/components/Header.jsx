export default function Header() {
  return (
    <header className="text-white  bg-gradient-to-r from-[#2E2E5C] to-blue-400 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Moch. Ridwan
        </a>
        <div>
          <a href="#about" className="ml-4">
            About
          </a>
          <a href="#skills" className="ml-4">
            Skills
          </a>
          <a href="#projects" className="ml-4">
            Projects
          </a>
          <a href="#contact" className="ml-4">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

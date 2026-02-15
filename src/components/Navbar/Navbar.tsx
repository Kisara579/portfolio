function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-slate-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">KB</h1>
        <ul className="flex gap-8 text-white">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

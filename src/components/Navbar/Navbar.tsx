import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 100;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (
          scrollPos >= element.offsetTop &&
          scrollPos < element.offsetTop + element.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="w-full fixed top-4 left-0 z-50">
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden bg-black/30 backdrop-blur-[2px]"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-sm rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 p-3 shadow-xl shadow-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition
  ${
    active === id
      ? "bg-white/5 text-cyan-300"
      : "text-white/80 hover:bg-white/5 hover:text-cyan-300"
  }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
      <div
        className={`max-w-5xl mx-auto w-[calc(100%-24px)] sm:w-[calc(100%-48px)]  overflow-hidden px-6 py-3 flex justify-between items-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 transition-all duration-300 ${scrolled ? "px-4 sm:px-5 py-2 bg-black/40" : "px-4 sm:px-6 py-3 bg-white/5"}`}
      >
        <h1 className="text-2xl font-bold text-cyan-400">KB</h1>
        <button
          className="sm:hidden text-white text-2xl px-3 py-2 rounded-full hover:bg-white/5 transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden sm:flex gap-8 text-white">
          <li>
            <a
              href="#home"
              className={`px-3 py-2 rounded-full transition duration-300
  ${
    active === "home"
      ? "text-cyan-400 bg-white/5"
      : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
  }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`px-3 py-2 rounded-full transition duration-300
  ${
    active === "about"
      ? "text-cyan-400 bg-white/5"
      : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
  }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`px-3 py-2 rounded-full transition duration-300
  ${
    active === "skills"
      ? "text-cyan-400 bg-white/5"
      : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
  }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`px-3 py-2 rounded-full transition duration-300
  ${
    active === "projects"
      ? "text-cyan-400 bg-white/5"
      : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
  }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`px-3 py-2 rounded-full transition duration-300
  ${
    active === "contact"
      ? "text-cyan-400 bg-white/5"
      : "text-white/80 hover:text-cyan-300 hover:bg-white/5"
  }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

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

  const navItems = [
    { label: "./home", id: "home" },
    { label: "./about", id: "about" },
    { label: "./arsenal", id: "skills" },
    { label: "./operations", id: "projects" },
    { label: "./contact", id: "contact" },
  ];

  return (
    <nav className="w-full fixed top-4 left-0 z-50">
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-sm rounded-xl bg-cyber-bg/95 backdrop-blur-md border border-cyber-green/20 p-3 shadow-xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                  active === id
                    ? "bg-cyber-green/10 text-cyber-green text-glow"
                    : "text-cyber-text hover:bg-cyber-green/5 hover:text-cyber-green"
                }`}
              >
                <span className="text-cyber-green/50 mr-1">&gt;</span> {label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main navbar */}
      <div
        className={`max-w-5xl mx-auto w-[calc(100%-24px)] sm:w-[calc(100%-48px)] overflow-hidden px-6 py-3 flex justify-between items-center rounded-xl transition-all duration-500 ${
          scrolled
            ? "bg-cyber-bg/90 backdrop-blur-md border border-cyber-green/20 shadow-lg shadow-cyber-green/5"
            : "bg-cyber-bg/50 backdrop-blur-sm border border-cyber-green/10"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-sm sm:text-base text-cyber-green hover:text-cyber-green/80 transition-colors duration-300 group"
        >
          <span className="text-cyber-green/50">root@</span>
          <span className="text-cyber-green font-bold">kisara</span>
          <span className="text-cyber-green/50">:~$</span>
          <span className="inline-block w-2 h-4 bg-cyber-green/80 ml-1 animate-pulse-green align-middle" />
        </a>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-cyber-green text-xl px-3 py-2 rounded-lg hover:bg-cyber-green/10 transition-all duration-300 font-mono"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "[✕]" : "[☰]"}
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          <ul className="flex gap-1">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`px-3 py-2 rounded-lg font-mono text-xs transition-all duration-300 relative group ${
                    active === id
                      ? "text-cyber-green bg-cyber-green/10"
                      : "text-cyber-text/70 hover:text-cyber-green hover:bg-cyber-green/5"
                  }`}
                >
                  {label}
                  {active === id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-cyber-green/60 rounded-full shadow-[0_0_8px_rgba(0,255,65,0.4)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Status indicator */}
          <div className="ml-4 pl-4 border-l border-cyber-green/15 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
            </span>
            <span className="text-cyber-green/60 text-[10px] font-mono uppercase tracking-widest">Secure</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

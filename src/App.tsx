import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import MatrixRain from "./components/MatrixRain/MatrixRain.tsx";
import ParticleNetwork from "./components/ParticleNetwork/ParticleNetwork.tsx";

function App() {
  return (
    <>
      <MatrixRain opacity={0.07} />
      <ParticleNetwork />
      <div className="relative min-h-screen bg-cyber-bg circuit-bg z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* Footer */}
        <footer className="py-8 text-center border-t border-cyber-green/10">
          <p className="text-cyber-green/40 font-mono text-sm">
            <span className="text-cyber-green/60">&gt;</span> root@kisara:~$ echo "© 2025 Kisara Beddawala. All rights reserved."
          </p>
          <p className="text-cyber-green/20 font-mono text-xs mt-2">
            [ SYSTEM UPTIME: ∞ | STATUS: SECURE | ENCRYPTION: AES-256 ]
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </>
  );
}

export default App;

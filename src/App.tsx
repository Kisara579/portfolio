import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;

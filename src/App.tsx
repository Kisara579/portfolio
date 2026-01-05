import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;

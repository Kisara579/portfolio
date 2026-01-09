import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
          Projects
        </h2>

        <p className="text-gray-400">
          Some of the projects I've worked on to build my skills and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Smart Password Analyzer"
            description="Analyzes password strength and highlights security risks."
            techStack={["React", "TypeScript", "Tailwind", "Cybersecurity"]}
            githubUrl="https://github.com/kisara579/smart-password-risk-analyzer"
          />

          <ProjectCard
            title="Portfolio Website"
            description="Personal developer portfolio with modern UI."
            techStack={["React", "Tailwind", "Vite"]}
            githubUrl="https://github.com/kisara579/portfolio"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

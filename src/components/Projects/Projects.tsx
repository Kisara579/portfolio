import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Smart Password Analyzer",
      description: "Analyzes password strength and highlights security risks.",
      techStack: ["React", "TypeScript", "Tailwind", "Cybersecurity"],
      githubUrl: "https://github.com/kisara579/smart-password-risk-analyzer",
    },
    {
      title: "Portfolio Website",
      description: "Personal developer portfolio with modern UI.",
      techStack: ["React", "Tailwind", "Vite"],
      githubUrl: "https://github.com/kisara579/portfolio",
    },
  ];
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 py-24 bg-gradient-to-b from-[#050816] via-black to-[#050816]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="text-center space-y-6 mb-5">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
            Projects
          </h2>
        </div>

        <p className="text-gray-400">
          Some of the projects I've worked on to build my skills and experience.
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30 bg-cyan-500/10 rounded-3xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

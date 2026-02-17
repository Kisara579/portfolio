import ProjectCard , {type ProjectCardProps} from "./ProjectCard";

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
    <section id="projects" className="w-full scroll-mt-28 py-12 bg-gradient-to-b from-[#050816] via-black to-[#050816]" >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
          Projects
        </h2>

        <p className="text-gray-400">
          Some of the projects I've worked on to build my skills and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

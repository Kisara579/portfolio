import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
};

export type { ProjectCardProps };

function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className="group flex flex-col h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6
                transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30
                hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-cyan-200">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-2.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

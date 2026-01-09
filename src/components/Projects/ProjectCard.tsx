import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
};

function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/50 hover:-translate-y-0.5  transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-2 py-1 rounded bg-cyan-400/10 text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline text-sm"
      >
        <FaGithub className="inline mr-2" />
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;

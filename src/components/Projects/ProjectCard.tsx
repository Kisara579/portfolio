import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  missionId: string;
  status?: "COMPLETED" | "IN PROGRESS";
};

export type { ProjectCardProps };

function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  missionId,
  status = "COMPLETED",
}: ProjectCardProps) {
  return (
    <div className="terminal-window scanlines group relative">
      <div className="terminal-header">
        <div className="terminal-dot bg-cyber-red" />
        <div className="terminal-dot bg-cyber-amber" />
        <div className="terminal-dot bg-cyber-green" />
        <span className="text-[10px] font-mono text-cyber-green/40 ml-2">
          mission_{missionId}.log
        </span>
      </div>
      <div className="terminal-body relative z-10 flex flex-col h-full">
        {/* Mission header */}
        <div className="flex items-start justify-between mb-3">
          <div className="text-[10px] font-mono text-cyber-green/40 tracking-widest">
            MISSION-{missionId}
          </div>
          <span className={`stamp ${
            status === "COMPLETED" ? "stamp-completed" : "stamp-progress"
          }`}>
            {status}
          </span>
        </div>

        <h3 className="text-lg font-heading font-semibold text-cyber-bright mb-2 group-hover:text-cyber-green transition-colors duration-300">
          {title}
        </h3>

        <p className="text-cyber-text/60 text-sm font-mono mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-cyber-green/40 mb-2 tracking-wider">TOOLS_USED:</div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded font-mono border border-cyber-green/20 bg-cyber-green/5 text-cyber-green/80 transition-colors duration-300 group-hover:border-cyber-green/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <div className="mt-auto pt-4 border-t border-cyber-green/10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-cyber-green/70 hover:text-cyber-green transition-all duration-300 group/link"
          >
            <FaGithub className="text-lg" />
            <span>[ ACCESS REPOSITORY →</span>
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">]</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

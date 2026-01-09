type ProjectCardProps = {
  title: string;
  description: string;
};

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/50 hover:-translate-y-0.5  transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/20">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-lg font-semibold text-white  ">{description}</p>
    </div>
  );
}

export default ProjectCard;

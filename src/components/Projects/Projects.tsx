import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects: ProjectCardProps[] = [
    {
      title: "Smart Password Analyzer",
      description: "Analyzes password strength and highlights security risks using advanced algorithms.",
      techStack: ["React", "TypeScript", "Tailwind", "Cybersecurity"],
      githubUrl: "https://github.com/kisara579/smart-password-risk-analyzer",
      missionId: "001",
      status: "COMPLETED",
    },
    {
      title: "AI Birth Complication Prediction System",
      description:
        "Machine learning system for predicting maternal health complications using classification models and performance evaluation metrics.",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "ML"],
      githubUrl: "https://github.com/Kisara579/AI_based_Birth_Cohort_Study",
      missionId: "002",
      status: "COMPLETED",
    },
    {
      title: "Smart Notes App",
      description:
        "A productivity notes application with local storage and clean UI for managing personal notes efficiently.",
      techStack: ["Flutter", "Dart", "Local Storage", "UI/UX"],
      githubUrl: "https://github.com/Kisara579/secure_notes_app",
      missionId: "003",
      status: "COMPLETED",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 py-24 relative"
    >
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto px-6 fade-in ${isVisible ? "visible" : ""}`}
      >
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="text-sm font-mono text-cyber-green/40 mb-3">
            <span className="text-cyber-green/60">&gt;</span> ls -la /operations/
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cyber-green text-glow">
            Operations
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-32 bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
          <p className="text-cyber-text/60 mt-4 font-mono text-sm">
            Classified projects I've worked on to build my skills and experience.
          </p>
        </div>

        {/* Projects grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

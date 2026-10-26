import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Cybersecurity & System Security",
    tag: "OFFENSIVE",
    tagColor: "text-cyber-red",
    icon: "🛡️",
    skills: [
      "Understanding basic web security fundamentals",
      "Basic awareness of OWASP Top 10 vulnerabilities",
      "Basic understanding of authentication and access control",
      "Developing security-aware thinking in web applications",
    ],
  },
  {
    title: "Computer Science Foundations",
    tag: "CORE",
    tagColor: "text-cyber-green",
    icon: "💻",
    skills: [
      "Programming fundamentals",
      "Data structures",
      "Basic networking concepts",
      "Operating system basics",
    ],
  },
  {
    title: "Machine Learning & AI",
    tag: "RESEARCH",
    tagColor: "text-cyber-amber",
    icon: "🧠",
    skills: [
      "Developing ML models for healthcare prediction systems",
      "Working with classification algorithms",
      "Model evaluation using accuracy, precision, recall, and F1-score",
      "Data preprocessing and feature selection for ML pipelines",
    ],
  },
  {
    title: "Programming & App Development",
    tag: "BUILD",
    tagColor: "text-cyber-green",
    icon: "⚡",
    skills: [
      "Python for machine learning and backend logic",
      "JavaScript & React for frontend development",
      "Flutter for mobile application development",
      "HTML, CSS, Tailwind for responsive UI design",
    ],
  },
  {
    title: "Tools & Development Workflow",
    tag: "TOOLS",
    tagColor: "text-cyber-green",
    icon: "🔧",
    skills: [
      "Git & GitHub version control",
      "VS Code development environment",
      "Linux command line basics",
      "API integration and debugging practices",
    ],
  },
];

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="w-full py-24 scroll-mt-20 relative"
    >
      {/* Section Heading */}
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto px-6 text-center mb-14 fade-in ${isVisible ? "visible" : ""}`}
      >
        <div className="text-sm font-mono text-cyber-green/40 mb-3">
          <span className="text-cyber-green/60">&gt;</span> cat /etc/arsenal
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cyber-green text-glow">
          Arsenal
        </h2>
        <div className="mx-auto mt-4 h-[1px] w-32 bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
        <p className="text-cyber-text/60 mt-4 font-mono text-sm">
          Areas I'm actively learning and exploring as I build my cybersecurity foundation.
        </p>
      </div>

      {/* Skills Grid */}
      <div className={`max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="terminal-window scanlines group"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-cyber-red" />
              <div className="terminal-dot bg-cyber-amber" />
              <div className="terminal-dot bg-cyber-green" />
              <span className="text-[10px] font-mono text-cyber-green/40 ml-2 truncate">
                {category.title.toLowerCase().replace(/[\s&]/g, '_')}.sh
              </span>
              <span className={`ml-auto text-[9px] font-mono font-bold tracking-widest ${category.tagColor}`}>
                [{category.tag}]
              </span>
            </div>
            <div className="terminal-body relative z-10">
              <h3 className="text-lg font-heading font-semibold text-cyber-bright mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <ul className="space-y-2.5 font-mono text-sm">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex gap-2 text-cyber-text/80 group-hover:text-cyber-text transition-colors duration-300">
                    <span className="text-cyber-green/60 shrink-0">→</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

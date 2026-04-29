import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();
  const cardClass =
    "p-6 text-left rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 " +
    "transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10";
  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-[#050816] via-black to-[#050816] scroll-mt-20"
    >
      {/* Section Heading */}
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto px-6 text-center mb-12 fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.40)]">
          Skills & Learning Focus
        </h2>
        <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
        <p className="text-gray-400 mt-4">
          Areas I’m actively learning and exploring as I build my cybersecurity
          and computer science foundation.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white mb-3">
            Cybersecurity & System Security
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-200/90">
            <li>Understanding basic web security fundamentals</li>
            <li>Basic awareness of OWASP Top 10 vulnerabilities</li>
            <li>Basic understanding of authentication and access control</li>
            <li>Developing security-aware thinking in web applications</li>
          </ul>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white mb-3">
            Computer Science Foundations
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-200/90">
            <li>Programming fundamentals</li>
            <li>Data structures</li>
            <li>Basic networking concepts</li>
            <li>Operating system basics</li>
          </ul>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white mb-3">
            Machine Learning & AI (Project-Based)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-200/90">
            <li>Developing ML models for healthcare prediction systems</li>
            <li>Working with classification algorithms</li>
            <li>
              Model evaluation using accuracy, precision, recall, and F1-score
            </li>
            <li>Data preprocessing and feature selection for ML pipelines</li>
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white mb-3">
            Programming & Application Development
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-200/90">
            <li>Python for machine learning and backend logic</li>
            <li>JavaScript & React for frontend development</li>
            <li>Flutter for mobile application development</li>
            <li>HTML, CSS, Tailwind for responsive UI design</li>
          </ul>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white mb-3">
            Tools & Development Workflow
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-200/90">
            <li>Git & GitHub version control</li>
            <li>VS Code development environment</li>
            <li>Linux command line basics</li>
            <li>API integration and debugging practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

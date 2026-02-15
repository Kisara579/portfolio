function Skills() {
  return (
    <section id="skills" className="w-full py-32 bg-slate-950">
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-500">
          Skills & Learning Focus
        </h2>
        <p className="text-gray-400 mt-4">
          Areas I’m actively learning and exploring as I build my cybersecurity and computer science foundation.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-white mb-3">
            Cybersecurity (Learning Focus)
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Understanding common security concepts</li>
            <li>Intro to web vulnerabilities</li>
            <li>OWASP Top 10 (learning)</li>
            <li>Password & authentication basics</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-white mb-3">
            Computer Science Foundations
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Programming fundamentals</li>
            <li>Data structures (learning)</li>
            <li>Basic networking concepts</li>
            <li>Operating system basics</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-white mb-3">
            Programming & Web Development
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>JavaScript (basics)</li>
            <li>Python (basics)</li>
            <li>React (learning)</li>
            <li>HTML, CSS, Tailwind</li>
          </ul>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-white mb-3">
            Tools & Development Environment
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Linux (beginner)</li>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Command line basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

function Projects() {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
          Projects
        </h2>
        <p className="text-gray-400  ">
          Some of the projects I've worked on to build my skills and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  ">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 1</h3>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 2</h3>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 3</h3>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 4</h3>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 5</h3>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:-translate-y-0.5  transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-3">Project 6</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

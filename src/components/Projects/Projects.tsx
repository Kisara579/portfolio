import ProjectCard from "./ProjectCard";

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
          <ProjectCard
            title="Project 1"
            description="Description of Project 1"
          ></ProjectCard>
          <ProjectCard
            title="Project 2"
            description="Description of Project 2"
          ></ProjectCard>
          <ProjectCard
            title="Project 3"
            description="Description of Project 3"
          ></ProjectCard>
          <ProjectCard
            title="Project 4"
            description="Description of Project 4"
          ></ProjectCard>
          <ProjectCard
            title="Project 5"
            description="Description of Project 5"
          ></ProjectCard>
          <ProjectCard
            title="Project 6"
            description="Description of Project 6"
          ></ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;

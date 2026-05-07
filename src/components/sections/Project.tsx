import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="py-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium uppercase tracking-widest text-[#F8F8F3] mb-8">
          personal projects
        </h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory project-scroll">
        {projects.map((project) => (
          <div key={project.id} className="w-75 shrink-0 flex snap-start">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

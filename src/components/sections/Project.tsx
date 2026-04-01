import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

const Project = () => {
  return (
    <section id="projects" className="px-8 py-16">
      <div>
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Projects
        </h3>
        <div className="flex gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

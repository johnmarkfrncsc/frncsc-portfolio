import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="py-10">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium uppercase tracking-widest text-[#F8F8F3] mb-8">
          personal projects
        </h3>
        <a
          href="https://github.com/johnmarkfrncsc"
          className="text-md text-[#4b5563] hover:text-[#F8F8F3] transition-colors"
        >
          view all →
        </a>
      </div>
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;

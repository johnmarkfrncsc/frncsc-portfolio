import type { Project } from "../../types/projectType";
import SkillBadge from "./SkillBadge";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  status,
}: Project) => {
  const statusColor = {
    completed: "bg-green-500/10 text-green-500",
    "in-progress": "bg-yellow-500/10 text-yellow-500",
  };

  return (
    <div>
      {/* wrap*/}
      <div>
        {/* title - statusBadge */}
        <h3>{title}</h3>
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${statusColor[status] ?? "bg-gray-200 text-gray-700"}`}
        >
          {status}
        </span>
      </div>
      {/* description  & techStack */}
      <p>{description}</p>
      {techStack.map((skill) => (
        <SkillBadge key={skill} name={skill} />
      ))}
      {/*github url - liveUrl*/}
      <div>
        <a href={githubUrl}>Github</a>
        {liveUrl && <a href={liveUrl}>Live</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

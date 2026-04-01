import type { Project } from "../../types/ProjectType";
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
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
      {/* wrap*/}
      <div className="flex justify-between">
        {/* title - statusBadge */}
        <h3 className="text-md font-medium text-gray-700 mb-3">{title}</h3>
        <span
          className={`inline-flex rounded-full h-6 px-3 text-sm font-semibold mr-2 mb-2 ${statusColor[status] ?? "bg-gray-200 text-gray-700"}`}
        >
          {status}
        </span>
      </div>

      {/* description  & techStack */}
      <p className="tracking-wide text-gray-500 mb-4">{description}</p>
      <span className="flex flex-wrap gap-3 mb-3">
        {techStack.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </span>

      {/*github url - liveUrl*/}
      <div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg h-6 px-3 text-sm font-medium mr-2 mb-2 border border-gray-400"
        >
          Github
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg h-6 px-3 text-sm font-medium mr-2 mb-2 border border-gray-400"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

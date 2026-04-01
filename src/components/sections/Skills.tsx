import skills from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const tools = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="px-8 py-16 flex">
      <div className="flex-1">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Skills
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Frontend</h3>
            <span className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Backend</h3>
            <span className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Tools</h3>
            <span className="flex flex-wrap gap-3">
              {tools.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

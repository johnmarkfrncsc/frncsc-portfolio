import skills from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="py-10">
      <h3 className="text-lg font-medium uppercase tracking-widest text-[#F8F8F3] mb-8">
        Skills
      </h3>
      <div className="flex gap-3">
        <div className="flex-1 bg-[#0d0d0d] border border-[#1F2937] rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4b5563] mb-3">
            Frontend
          </p>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                category={skill.category}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[#0d0d0d] border border-[#1F2937] rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4b5563] mb-3">
            Backend
          </p>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                category={skill.category}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[#0d0d0d] border border-[#1F2937] rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4b5563] mb-3">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {toolSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                category={skill.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

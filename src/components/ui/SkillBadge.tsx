interface SkillBadgeProps {
  name: string;
  category?: "frontend" | "backend" | "tools";
}

const SkillBadge = ({ name, category }: SkillBadgeProps) => {
  const categoryColors = {
    frontend: "bg-blue-500/10 text-blue-500",
    backend: "bg-green-500/10 text-green-500",
    tools: "bg-yellow-500/10 text-yellow-500",
  };
  const nameColors: Record<string, string> = {
    React: "bg-blue-500/10 text-blue-500",
    TypeScript: "bg-blue-500/10 text-blue-500",
    JavaScript: "bg-yellow-500/10 text-yellow-500",
    HTML: "bg-orange-500/10 text-orange-500",
    CSS: "bg-blue-500/10 text-blue-500",
    TailwindCSS: "bg-teal-500/10 text-teal-500",
    Nodejs: "bg-green-500/10 text-green-500",
    MongoDB: "bg-green-500/10 text-green-500",
    Expressjs: "bg-gray-500/10 text-gray-500",
    Git: "bg-gray-500/10 text-gray-500",
    GitHub: "bg-gray-500/10 text-gray-500",
    Postman: "bg-gray-500/10 text-gray-500",
    Vercel: "bg-gray-500/10 text-gray-500",
    Railway: "bg-gray-500/10 text-gray-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${nameColors[name] ?? "bg-gray-400/10 text-gray-400"}`}
    >
      {category && (
        <span
          className={`inline-flex h-2 w-2 rounded-full ${categoryColors[category] ?? "bg-gray-400"}`}
        />
      )}
      {name}
    </span>
  );
};

export default SkillBadge;

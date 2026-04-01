type linkItem = {
  name: string;
  url: string;
};

const About = () => {
  const links: linkItem[] = [
    {
      name: "github.com/johnmarkfrncsc",
      url: "https://github.com/johnmarkfrncsc",
    },
    {
      name: "linkedin.com/in/johnmarkfrancisco",
      url: "https://www.linkedin.com/in/johnmarkfrancisco/",
    },
  ];

  return (
    <section id="about" className="px-8 py-16 flex gap-8">
      {/* left section */}
      <div className="flex-1">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          About
        </h3>
        <p className="tracking-wider text-gray-500">
          I'm a frontend developer based in the Philippines, focused on building
          real-world web applications. I work with the MERN stack and I'm
          currently practicing TypeScript across my projects.
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <span className="inline-block rounded-full bg-gray-400 h-2 w-2" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* right section */}
      <div className="flex-1">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-sm font-medium text-gray-700 mb-3">Currently</p>
          <ul className="list-none">
            <li className="border-b border-gray-200 py-2">
              Building a personal project to practice TypeScript
            </li>
            <li className="border-b border-gray-200 py-2">
              Deepening TypeScript knowledge across all projects
            </li>
            <li className="py-2">
              Contributing to open-source projects on GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

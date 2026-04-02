const About = () => {
  return (
    <section id="about" className="py-10">
      <h3 className="text-lg font-medium uppercase tracking-widest text-[#F8F8F3] mb-8">
        About
      </h3>
      <div className="flex gap-6">
        {/* left — bio + links */}
        <div className="flex-1">
          <p className="text-md text-[#f9fafb] leading-relaxed tracking-wider mb-4">
            I'm a frontend developer based in the Philippines, focused on
            building real-world web applications. I work with the MERN stack and
            I'm currently practicing TypeScript across my projects.
          </p>
        </div>

        {/* right — currently card */}
        <div className="flex-1">
          <div className="bg-[#0d0d0d] border border-[#1F2937] rounded-xl p-4">
            <p className="text-md font-semibold text-[#f9fafb] mb-3">
              Currently
            </p>
            <ul className="divide-y divide-[#27272a]">
              <li className="text-sm text-[#f9fafb] py-2">
                Building Rentara — rental management app
              </li>
              <li className="text-sm text-[#f9fafb] py-2">
                Deepening TypeScript across all projects
              </li>
              <li className="text-sm text-[#f9fafb] py-2">
                Open to frontend / fullstack roles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

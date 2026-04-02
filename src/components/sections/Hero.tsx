{
  /* TODO: ADD RESUME/CV LINK IN THE HERO SECTION */
}

const Hero = () => {
  return (
    <section id="hero" className="py-12 flex justify-between items-start gap-6">
      <div className="flex-1">
        <h1 className="text-3xl  md:text-5xl font-bold text-[#f9fafb] mb-2">
          hi, i'm mark. 👋
        </h1>
        <p className="text-sm text-white mb-3">
          Frontend Developer · Manila, Philippines 🇵🇭
        </p>
        <p className="text-sm text-white leading-relaxed max-w-sm mb-6">
          Frontend by focus, fullstack by passion. I build real things and ship
          them live.
        </p>
        <div className="flex gap-2 flex-wrap">
          <a
            href="#projects"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-white text-[#0d0d0d]"
          >
            View projects
          </a>
          <a
            href="https://github.com/johnmarkfrncsc"
            target="_blank"
            rel="noreferrer"
            className="text-xs px-4 py-2 rounded-lg border border-[#27272a] text-[#9ca3af]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/johnmarkfrancisco/"
            target="_blank"
            rel="noreferrer"
            className="text-xs px-4 py-2 rounded-lg border border-[#27272a] text-[#9ca3af]"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-xs px-4 py-2 rounded-lg border border-[#27272a] text-[#9ca3af]"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="w-24 h-28 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0">
        <span className="text-xs text-[#374151] text-center px-2 leading-relaxed">
          your photo
        </span>
      </div>
    </section>
  );
};

export default Hero;

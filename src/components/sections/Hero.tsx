const Hero = () => {
  return (
    <section id="hero" className="px-8 py-20">
      <span className="inline-flex gap-1 items-center rounded-full border border-gray-200 bg-gray-800 px-2 py-1 text-xs font-medium text-white">
        <span className="rounded-full bg-green-400 h-2 w-2" />
        available for work
      </span>
      <h1 className="mt-6 text-4xl md:text-5xl font-medium text-gray-900">
        Mark Francisco
      </h1>
      <h2 className="mt-2 text-4xl md:text-5xl font-medium text-gray-400">
        Frontend / Fullstack Developer
      </h2>
      <p className="mt-4 text-base text-gray-500 max-w-lg leading-relaxed">
        Building clean, functional web apps with React and Node.js. Currently
        honing fullstack skills with TypeScript and the MERN stack.
      </p>
      <div className="mt-8 flex gap-3">
        <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium">
          View projects
        </button>
        <button className="border border-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;

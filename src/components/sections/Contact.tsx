const Contact = () => {
  return (
    <section id="contact" className="px-8 py-16 flex">
      <div className="flex-1">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Contact
        </h3>
        <p className="tracking-wider text-gray-500">
          Open to frontend and full stack roles. Feel free to reach out via
          email or connect on LinkedIn.
        </p>
        <div className="mt-4">
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-gray-400/20 border border-gray-200 text-center px-2 py-0.5">
                @
              </span>
              <a
                href="mailto:johnmarkhilera@gmail.com"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-800 transition-colors"
              >
                johnmarkhilera@gmail.com
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-gray-400/20 border border-gray-200 text-center px-1.5 py-0.5">
                gh
              </span>
              <a
                href="https://github.com/johnmarkfrncsc"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-800 transition-colors"
              >
                github.com/johnmarkfrncsc
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-gray-400/20 border border-gray-200 text-center px-2 py-0.5">
                in
              </span>
              <a
                href="https://www.linkedin.com/in/johnmarkfrancisco/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-800 transition-colors"
              >
                linkedin.com/in/johnmarkfrancisco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

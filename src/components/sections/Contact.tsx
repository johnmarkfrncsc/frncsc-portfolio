const Contact = () => {
  const contacts = [
    {
      icon: "@",
      label: "johnmarkhilera@gmail.com",
      href: "mailto:johnmarkhilera@gmail.com",
    },
    {
      icon: "gh",
      label: "github.com/johnmarkfrncsc",
      href: "https://github.com/johnmarkfrncsc",
    },
    {
      icon: "in",
      label: "linkedin.com/in/johnmarkfrancisco",
      href: "https://www.linkedin.com/in/johnmarkfrancisco/",
    },
  ];

  return (
    <section id="contact" className="py-10">
      <h3 className="text-lg font-medium uppercase tracking-widest text-[#F8F8F3] mb-8">
        Contact
      </h3>
      <div className="flex flex-col">
        {contacts.map((contact) => (
          <a
            key={contact.icon}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 py-3 border-b border-[#18181b] last:border-none hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center text-xs text-[#4b5563] font-bold">
              {contact.icon}
            </div>
            <span className="text-sm font-medium text-[#6b7280]">
              {contact.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

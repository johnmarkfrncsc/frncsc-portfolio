const Navbar = () => {
  const navLinks = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav
      className="sticky top-0 w-full z-10 flex justify-between items-center 
px-8 py-4 border-b border-gray-200 bg-white"
    >
      <h2 className="text-lg font-medium">mf</h2>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

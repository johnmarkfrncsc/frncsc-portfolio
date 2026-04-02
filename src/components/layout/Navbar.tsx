import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-10 items-center py-4 bg-transparent backdrop-blur-xs">
      <div className="flex items-center">
        {/* ADD DARK/LIGHT THEME TOGGLE */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-md font-medium text-[#6b7280] hover:text-[#f9fafb] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-t border-gray-200">
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
      )}
    </nav>
  );
};

export default Navbar;

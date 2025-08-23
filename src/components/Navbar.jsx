import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed  top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-white tracking-wide">Inovix</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white relative transition duration-300 
                hover:text-cyan-400 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/50 backdrop-blur-xl border-t border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white relative transition duration-300 
                hover:text-cyan-400 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

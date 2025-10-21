import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const navName = [{
    name: "Home",
    pathname: "/#home",
  },
  {
    name: "About Me",
    pathname: "/#aboutme",
  }, {
    name: "Experiences",
    pathname: "/#experiences",
  }, 
  {
    name: "Projects",
    pathname: "/#projects",
  }, 
  {
    name: "Contact",
    pathname: "/#contact",
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white font-light text-lg sm:text-xl md:text-2xl">
          Juanito Aldebaran Siahaan
        </h1>

        <ul className="hidden md:flex items-center gap-6 text-white text-sm lg:text-base">
          {navName.map((item) => (
            <li key={item.name} className="hover:underline hover:underline-offset-6">
              <a href={`${item.pathname}`}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/juanitoaldebaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white relative group"
          >
            <FaGithub className="w-5 h-5" />
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/juanitosiahaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white relative group"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="mailto:juanitosiahaan1711@gmail.com"
            className="text-white relative group"
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6 animate-slide-down">
          <ul className="flex flex-col items-center gap-4 text-white text-base">
            {["home", "aboutme", "experiences", "projects", "contact"].map((item) => (
              <li key={item} className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/juanitoaldebaran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/juanitosiahaan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:juanitosiahaan1711@gmail.com" className="text-white">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

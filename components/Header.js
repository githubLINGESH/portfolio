import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex justify-between items-center p-5 relative"
      style={{
        background: "black",
        fontFamily: "League Spartan",
      }}
    >
      {/* Logo */}
      <h2
        className="text-2xl sm:text-3xl font-bold"
        style={{
          fontFamily: "League Spartan",
          WebkitBackgroundClip: "text",
          color: "#2581c4",
        }}
      >
        Lingeshwaran
      </h2>

      {/* Desktop Nav — hidden on mobile */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 text-xl">
          <li>
            <a
              href="#about"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#ContactSection"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-white focus:outline-none z-10"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>
      </button>

      {/* Mobile Menu Overlay — slides in from top */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 shadow-lg z-50">
          <nav className="flex flex-col p-5 space-y-4 text-xl">
            <a
              href="#about"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out block"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out block"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#ContactSection"
              className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
const Header = () => (
  <header className="flex justify-between items-center p-5" style={{ background: "black", fontFamily:"League Spartan",}}>
    <h2
      className="text-3xl font-bold text-center"
      style={{
        fontFamily:"League Spartan",
        WebkitBackgroundClip: "text",
        color:"#2581c4"
      }}
    >
      Lingeshwaran
    </h2>
    <nav>
      <ul className="flex space-x-4 text-xl">
        <li>
          <a href="#about" className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover-gradient px-3 py-2 rounded text-white transition duration-300 ease-in-out">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

const About = () => (
  <section
    id="about"
    className="py-20"
    style={{
      background: "var(--bg-main)",
      fontFamily: "League Spartan",
      color: "var(--text-main)"
    }}
  >
    <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center">
      {/* Left Column - Content */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <p className="mt-4 text-lg font-thin text-slate-400">
          I am a passionate developer with expertise in building AI-driven solutions
          and modern web applications. My goal is to create meaningful and scalable
          tech products that make a difference.
        </p>
        <p className="mt-4 text-lg font-thin text-slate-400">
          With a background in machine learning and full-stack development, I’m dedicated
          to bridging the gap between complex data and user-friendly applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center lg:justify-start space-x-4">
          {/* Start Project Button */}
          <a
            href="https://www.fiverr.com/s/e6YjBNj"  // Target URL
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"  // Security best practice
            className="relative px-6 py-3 font-bold text-white rounded-lg"
            style={{
              background: "black", // button inner background
              border: "3px solid transparent",
              borderRadius: "8px",
              backgroundImage: "linear-gradient(black, black), linear-gradient(to right, #2581c4, #1bcf54)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              display: "inline-block",
              transition: "all 0.3s ease",
              textDecoration: "none"  // Remove underline
            }}
          >
            Start Project
          </a>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1DiEcuSbhUsDrv6VahgOyCcpI_xoO6x90/view?usp=sharing"
            download="Lingesh_Resume.pdf"  // File name for download
            className="px-6 py-4 bg-gray-200 text-black font-bold rounded-lg transition"
            style={{ textDecoration: "none" }}  // Remove underline
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column - Profile Image */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex items-center justify-center">
        <img
          src="/profileimg.jpg"
          alt="Profile"
          className="rounded-lg shadow-lg object-cover w-60 h-60 lg:w-full lg:h-auto"
        />
      </div>
    </div>
  </section>
);

export default About;

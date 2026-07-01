import { Link } from "react-router-dom";
import { useState } from "react";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-6 md:px-8 py-5">
          <div className="text-red-500 text-2xl font-bold tracking-wide">
            JANHVI
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-red-500 font-semibold"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  className="hover:text-white transition"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <ul className="flex flex-col text-center text-gray-300">
              <li className="py-4 border-b border-gray-800">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li className="py-4 border-b border-gray-800 text-red-500 font-semibold">
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>

              <li className="py-4 border-b border-gray-800">
                <Link to="/education" onClick={() => setMenuOpen(false)}>
                  Education
                </Link>
              </li>

              <li className="py-4">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* About Content */}
      <section className="flex items-center justify-center px-6 pt-40 pb-20">
        <div className="max-w-3xl text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I'm Janhvi Brahmshtriya.
            <br /><br />

            I'm a Frontend Developer, AI enthusiast, and engineering student
            with a passion for creating beautiful and interactive digital
            experiences. Currently pursuing a B.Tech in Artificial Intelligence
            and Data Science, I enjoy exploring new technologies and
            transforming ideas into functional, user-friendly applications.

            <br /><br />

            Beyond technology, dance is an important part of my life. It
            inspires creativity, dedication, and continuous growth—qualities
            that I bring into every project I work on. I'm constantly learning,
            building, and striving to improve my skills as a developer while
            pursuing my passion for innovation.
          </p>

        </div>
      </section>
    </div>
  );
}

export default About;
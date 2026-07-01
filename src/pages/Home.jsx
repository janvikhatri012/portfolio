import { Link } from "react-router-dom";
import { useState } from "react";
import cv from "../assets/Jahnvi_CV.pdf";

function Home() {
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
                  className="text-red-500 font-semibold hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
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

          {/* Mobile Button */}
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

              <li className="py-4 border-b border-gray-800">
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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-20">

        <p className="text-sm tracking-widest text-gray-400 mb-4">
          FRONTEND DEVELOPER • REACT
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Jahnvi <br /> Brahmshtriya
        </h1>

        <h2 className="mt-4 text-xl text-gray-300">
          Creating Digital Experiences
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          Engineering student, frontend developer and dancer passionate
          about designing modern websites and interactive user experiences.
        </p>

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold shadow-lg">
            Download CV
          </button>
        </a>

      </section>
    </div>
  );
}

export default Home;
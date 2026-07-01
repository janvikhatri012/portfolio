import { Link } from "react-router-dom";
import { useState } from "react";

function Education() {
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
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  className="text-red-500 font-semibold"
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

              <li className="py-4 border-b border-gray-800">
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>

              <li className="py-4 border-b border-gray-800 text-red-500 font-semibold">
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

      {/* Education Content */}
      <section className="px-6 pt-40 pb-20 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Education
        </h1>

        {/* Diploma */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 shadow-lg hover:shadow-red-500/20 transition duration-300">

          <h2 className="text-2xl font-semibold">
            Diploma in Artificial Intelligence & Machine Learning
          </h2>

          <h3 className="text-red-400 mt-2">
            LJ University
          </h3>

          <p className="text-gray-400 mt-1">
            2022 – 2025
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Completed a Diploma in AI & ML with a focus on Artificial
            Intelligence, Machine Learning, Python, Data Analytics,
            Web Development, and Software Engineering fundamentals.
          </p>

        </div>

        {/* B.Tech */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 transition duration-300">

          <h2 className="text-2xl font-semibold">
            Bachelor of Technology (B.Tech)
          </h2>

          <h3 className="text-red-400 mt-2">
            Artificial Intelligence & Data Science
          </h3>

          <p className="text-gray-400 mt-1">
            JG University (2025 - Present)
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Currently pursuing B.Tech with specialization in Artificial
            Intelligence & Data Science while strengthening my skills in
            React.js, Machine Learning, Data Science, and Full Stack
            Development.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Education;
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <div className="text-red-500 text-2xl font-bold tracking-wide">
          JANHVI
        </div>

        <nav>
          <ul className="flex gap-8 text-gray-300">
            <li className="hover:text-white transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="px-6 py-16 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Education
        </h1>

        {/* Card 1 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 shadow-lg hover:shadow-red-500/10 transition">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Diploma in Artificial Intelligence & Machine Learning
          </h2>

          <h3 className="text-red-400 mt-2">
            LJ University
          </h3>

          <p className="text-gray-400 mt-1">
            2022 - 2025
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Completed a Diploma in AI & ML with a focus on machine learning,
            artificial intelligence, programming, and data-driven technologies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-500/10 transition">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science
          </h2>

          <h3 className="text-red-400 mt-2">
            JG University
          </h3>

          <p className="text-gray-400 mt-1">
            2025 (Pursuing)
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Currently pursuing B.Tech in AI & DS, focusing on artificial
            intelligence, data science, machine learning, and software development.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Education;
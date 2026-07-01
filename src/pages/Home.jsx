import { Link } from "react-router-dom";
import cv from "../assets/Jahnvi_CV.pdf";
function Home() {
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
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/Education">Education</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        
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

        {/* Button */}
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
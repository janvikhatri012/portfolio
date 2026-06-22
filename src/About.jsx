import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h2 className="text-red-500 text-2xl font-bold tracking-wide">
          Portfolio.
        </h2>

        <nav>
          <ul className="flex gap-8 text-gray-300">
            <li className="hover:text-white transition">
              <Link to="/">Home</Link>
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

      {/* About Content */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I'm Janhvi Brahmshtriya.
            <br /><br />

            I'm a Frontend Developer, AI enthusiast, and engineering student with a passion for creating
            beautiful and interactive digital experiences. Currently pursuing a B.Tech in Artificial Intelligence
            and Data Science, I enjoy exploring new technologies and transforming ideas into functional,
            user-friendly applications.
            <br /><br />

            Beyond technology, dance is an important part of my life. It inspires creativity, dedication, and
            continuous growth—qualities that I bring into every project I work on. I'm constantly learning,
            building, and striving to improve my skills as a developer while pursuing my passion for innovation.
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;
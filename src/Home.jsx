import { Link } from "react-router-dom";
import cv from "./assets/Jahnvi_CV.pdf";

function Home() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">JANHVI</div>

        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <p className="tag">FRONTEND DEVELOPER • REACT</p>

        <h1>
          Jahnvi
          <br />
          Brahmshtriya
        </h1>

        <h2>Creating Digital Experiences</h2>

        <p className="hero-text">
          Engineering student, frontend developer and dancer passionate
          about designing modern websites and interactive user experiences.
        </p>

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            Download CV
          </button>
        </a>
      </section>
    </div>
  );
}

export default Home;
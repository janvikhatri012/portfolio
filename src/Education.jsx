import { Link } from "react-router-dom";

function Education() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">JANHVI</div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="page">
        <h1>Education</h1>

        <div className="education-card">
          <h2>Diploma in Artificial Intelligence & Machine Learning</h2>
          <h3>LJ University</h3>
          <p>2022 - 2025</p>
          <p>
            Completed a Diploma in AI & ML with a focus on machine learning,
            artificial intelligence, programming, and data-driven technologies.
          </p>
        </div>

        <div className="education-card">
          <h2>Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science</h2>
          <h3>JG UNIVERSITY</h3>
          <p>2025 (Pursuing)</p>
          <p>
            Currently pursuing B.Tech in AI & DS, focusing on artificial
            intelligence, data science, machine learning, and software
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
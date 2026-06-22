import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Portfolio.</h2>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="page">
        <h1>About Me</h1>
        <p>
         Hi, I'm Janhvi Brahmshtriya.

I'm a Frontend Developer, AI enthusiast, and engineering student with a passion for creating beautiful and interactive digital experiences. Currently pursuing a B.Tech in Artificial Intelligence and Data Science, I enjoy exploring new technologies and transforming ideas into functional, user-friendly applications.

Beyond technology, dance is an important part of my life. It inspires creativity, dedication, and continuous growth—qualities that I bring into every project I work on. I'm constantly learning, building, and striving to improve my skills as a developer while pursuing my passion for innovation.

        </p>
      </div>
    </div>
  );
}

export default About;
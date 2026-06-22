import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Portfolio.</h2>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
          </ul>
        </nav>
      </header>

      <div className="page">
        <h1>Contact Me</h1>

        <p>Email: janhvi@example.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Ahmedabad, Gujarat</p>
      </div>
    </div>
  );
}

export default Contact;
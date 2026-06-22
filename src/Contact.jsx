import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen bg-red-950 text-white">

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
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/Education">Education</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-full max-w-xl text-center shadow-lg hover:shadow-red-500/10 transition">

          <h1 className="text-4xl font-bold mb-8">
            Contact Me
          </h1>

          <div className="space-y-4 text-gray-300 text-lg">

            <p>
              📧 Email:{" "}
              <span className="text-white">janhvi@example.com</span>
            </p>

            <p>
              📞 Phone:{" "}
              <span className="text-white">+91 98765 43210</span>
            </p>

            <p>
              📍 Ahmedabad, Gujarat
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
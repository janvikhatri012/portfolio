import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    subject: Yup.string().required("Subject is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const sendEmail = (values, { resetForm }) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed To Send Message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">

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
                  className="hover:text-white transition"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-red-500 font-semibold"
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

              <li className="py-4 text-red-500 font-semibold">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>

            </ul>

          </div>
        )}

      </header>

      {/* Contact Form */}
      <section className="px-6 pt-40 pb-20">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Contact <span className="text-red-400">Me</span>
          </h1>

          <p className="text-center text-gray-400 mt-6">
            Have a question, project idea or collaboration opportunity?
            Feel free to send me a message.
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            <Form className="mt-16 space-y-6">

              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-400 mt-2"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-400 mt-2"
                />
              </div>

              <div>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="subject"
                  component="p"
                  className="text-red-400 mt-2"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 resize-none"
                />

                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-400 mt-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 transition py-5 rounded-2xl font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </Form>
          </Formik>

        </div>

      </section>

    </div>
  );
}

export default Contact;
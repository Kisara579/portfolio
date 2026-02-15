import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
          Contact
        </h2>

        <p className="text-gray-400">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <form className="max-w-xl mx-auto mt-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-cyan-400"
          />
          <button
            type="submit"
            className="bg-cyan-400 text-black px-6 py-3 rounded hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:your.email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

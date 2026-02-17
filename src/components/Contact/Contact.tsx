import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="w-full py-24 scroll-mt-20 bg-gradient-to-b from-[#050816] via-black to-[#050816]"
    >
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto px-6 text-center space-y-6 fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400">
          Contact
        </h2>

        <p className="text-gray-400">
          Feel free to reach out for collaboration or opportunities.
        </p>
      </div>
      <div className="relative max-w-xl mx-auto mt-10">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30 bg-cyan-500/10 rounded-3xl" />
        <form className="flex flex-col gap-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40
                      transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40
                      transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white
                      focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40
                      transition-all"
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black
                      px-6 py-3 rounded-xl font-medium
                    hover:from-cyan-300 hover:to-cyan-400
                      transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:kisarabeddawala@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10
                 hover:border-cyan-400/40 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105
                 transition-all"
          >
            <SiGmail className="text-2xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
          <a
            href="https://github.com/kisara579"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10
                 hover:border-cyan-400/40 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105  
                 transition-all"
          >
            <FaGithub className="text-2xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/kisara-beddawala-809980330"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10
                 hover:border-cyan-400/40 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105
                 transition-all"
          >
            <FaLinkedin className="text-2xl text-cyan-400 hover:text-cyan-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

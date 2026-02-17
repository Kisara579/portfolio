function About() {
  return (
    <section
      id="about"
      className="w-full py-24 bg-gradient-to-b from-[#050816] via-black to-[#050816] scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 text-center space-y-6 shadow-lg shadow-black/30">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-cyan-400 mb-6">
            About Me
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-300 leading-relaxed text-left sm:text-center">
            <p>
              I’m a computer science undergraduate focused on cybersecurity and
              ethical hacking. I enjoy understanding how systems work, how they
              break, and how to secure them.
            </p>
            <p>
              I’m currently building hands-on projects in web security, password
              analysis, and defensive techniques-learning by doing, not just
              reading.
            </p>
            <p>
              My goal is simple: become a skilled security professional who
              builds safer systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

function About() {
  return (
    <section className="w-full py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        {/* Section Heading */}
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
            analysis, and defensive techniques—learning by doing, not just
            reading.
          </p>
          <p>
            My goal is simple: become a skilled security professional who builds
            safer systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="w-full py-24 scroll-mt-20 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={elementRef}
          className={`fade-in ${isVisible ? "visible" : ""}`}
        >
          {/* Terminal window */}
          <div className="terminal-window scanlines">
            <div className="terminal-header">
              <div className="terminal-dot bg-cyber-red" />
              <div className="terminal-dot bg-cyber-amber" />
              <div className="terminal-dot bg-cyber-green" />
              <span className="text-xs font-mono text-cyber-green/50 ml-2">about_me.sh — bash</span>
            </div>
            <div className="terminal-body space-y-4">
              {/* Section header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cyber-green text-glow">
                  &gt; About Me
                </h2>
                <div className="mx-auto mt-4 h-[1px] w-32 bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
              </div>

              {/* Terminal output style content */}
              <div className="space-y-4 font-mono text-sm sm:text-base">
                <div className="flex gap-3">
                  <span className="text-cyber-green/60 select-none shrink-0">$</span>
                  <p className="text-cyber-text leading-relaxed">
                    I'm a computer science undergraduate focused on <span className="text-cyber-green">cybersecurity</span> and
                    <span className="text-cyber-green"> ethical hacking</span>. I enjoy understanding how systems work, how they
                    break, and how to secure them.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyber-green/60 select-none shrink-0">$</span>
                  <p className="text-cyber-text leading-relaxed">
                    I'm currently building hands-on projects in <span className="text-cyber-amber">web security</span>,
                    <span className="text-cyber-amber"> password analysis</span>, and
                    <span className="text-cyber-amber"> defensive techniques</span> — learning by doing, not just reading.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyber-green/60 select-none shrink-0">$</span>
                  <p className="text-cyber-text leading-relaxed">
                    My goal is simple: become a skilled <span className="text-cyber-green font-semibold">security professional</span> who
                    builds safer systems.
                  </p>
                </div>
              </div>

              {/* System stats bar */}
              <div className="mt-8 pt-6 border-t border-cyber-green/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-cyber-green/5 border border-cyber-green/10">
                    <div className="text-cyber-green text-lg font-bold">Active</div>
                    <div className="text-cyber-text/50 text-xs mt-1">STATUS</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-green/5 border border-cyber-green/10">
                    <div className="text-cyber-amber text-lg font-bold">CS</div>
                    <div className="text-cyber-text/50 text-xs mt-1">DEGREE</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-green/5 border border-cyber-green/10">
                    <div className="text-cyber-green text-lg font-bold">Cyber</div>
                    <div className="text-cyber-text/50 text-xs mt-1">FOCUS</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-green/5 border border-cyber-green/10">
                    <div className="text-cyber-green text-lg font-bold">3+</div>
                    <div className="text-cyber-text/50 text-xs mt-1">PROJECTS</div>
                  </div>
                </div>
              </div>

              {/* Blinking cursor at bottom */}
              <div className="text-cyber-green/40 text-sm font-mono pt-2">
                <span className="text-cyber-green/60">root@kisara:~$</span>
                <span className="blinking-cursor"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

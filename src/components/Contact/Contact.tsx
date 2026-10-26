import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="w-full py-24 scroll-mt-20 relative"
    >
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto px-6 text-center mb-10 fade-in ${isVisible ? "visible" : ""}`}
      >
        <div className="text-sm font-mono text-cyber-green/40 mb-3">
          <span className="text-cyber-green/60">&gt;</span> ssh connect@kisara --secure
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cyber-green text-glow">
          Establish Connection
        </h2>
        <div className="mx-auto mt-4 h-[1px] w-32 bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
        <p className="text-cyber-text/60 mt-4 font-mono text-sm">
          Secure channel open. Reach out for collaboration or opportunities.
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6">
        {/* Terminal form */}
        <div className={`terminal-window scanlines fade-in ${isVisible ? "visible" : ""}`}>
          <div className="terminal-header">
            <div className="terminal-dot bg-cyber-red" />
            <div className="terminal-dot bg-cyber-amber" />
            <div className="terminal-dot bg-cyber-green" />
            <span className="text-xs font-mono text-cyber-green/50 ml-2">secure_channel.sh — bash</span>
            <span className="ml-auto text-[9px] font-mono text-cyber-green/60 tracking-wider flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              ENCRYPTED
            </span>
          </div>
          <div className="terminal-body relative z-10">
            {/* Encryption banner */}
            <div className="mb-6 p-3 rounded-lg bg-cyber-green/5 border border-cyber-green/10 text-center">
              <span className="text-xs font-mono text-cyber-green/60">
                🔒 Channel Encrypted — AES-256 · TLS 1.3
              </span>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label className="text-xs font-mono text-cyber-green/50 mb-2 block">
                  name@target:~$
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full cyber-input rounded-lg"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-cyber-green/50 mb-2 block">
                  email@target:~$
                </label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full cyber-input rounded-lg"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-cyber-green/50 mb-2 block">
                  message@target:~$
                </label>
                <textarea
                  placeholder="Type your message..."
                  rows={5}
                  className="w-full cyber-input rounded-lg resize-none"
                />
              </div>
              <button
                type="submit"
                className="cyber-btn-filled rounded-lg mt-2 text-center"
              >
                [ TRANSMIT → ]
              </button>
            </form>

            {/* Blinking cursor */}
            <div className="text-cyber-green/30 text-sm font-mono pt-4">
              <span className="text-cyber-green/50">root@kisara:~$</span>
              <span className="blinking-cursor"> </span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="mailto:kisarabeddawala@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-cyber-surface border border-cyber-green/15
                       hover:border-cyber-green/40 hover:bg-cyber-green/10
                       hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]
                       transition-all duration-300 group"
          >
            <SiGmail className="text-xl text-cyber-green/60 group-hover:text-cyber-green transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/kisara579"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-cyber-surface border border-cyber-green/15
                       hover:border-cyber-green/40 hover:bg-cyber-green/10
                       hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]
                       transition-all duration-300 group"
          >
            <FaGithub className="text-xl text-cyber-green/60 group-hover:text-cyber-green transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/kisara-beddawala-809980330"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-cyber-surface border border-cyber-green/15
                       hover:border-cyber-green/40 hover:bg-cyber-green/10
                       hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]
                       transition-all duration-300 group"
          >
            <FaLinkedin className="text-xl text-cyber-green/60 group-hover:text-cyber-green transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

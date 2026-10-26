import { useState, useEffect } from "react";
import UserImage from "../../assets/profile.jpg";

const roles = [
  "Ethical Hacker",
  "Penetration Tester",
  "Bug Hunter",
  "Security Researcher",
  "Code Breaker",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen text-white px-6 pt-24"
    >
      {/* Radial glow behind profile */}
      <div className="absolute top-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyber-green/5 rounded-full blur-[100px] -z-10" />

      {/* Hex profile image */}
      <div className="mb-10 fade-in visible">
        <div className="hex-frame-border w-48 h-48 sm:w-56 sm:h-56 animate-float">
          <div className="hex-frame w-full h-full overflow-hidden">
            <img
              src={UserImage}
              alt="Kisara Beddawala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl text-center">
        {/* Terminal prompt */}
        <div className="text-sm font-mono text-cyber-green/50 mb-3 fade-in visible" style={{ animationDelay: '0.2s' }}>
          <span className="text-cyber-green/70">&gt;</span> initiating_session...
          <span className="text-cyber-green"> [OK]</span>
        </div>

        {/* Greeting */}
        <div className="text-base sm:text-lg text-cyber-text mb-2 font-mono fade-in visible" style={{ animationDelay: '0.3s' }}>
          $ whoami
        </div>

        {/* Name with glitch */}
        <h1
          className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-cyber-green text-glow glitch mb-4"
          data-text="Kisara Beddawala"
        >
          Kisara Beddawala
        </h1>

        {/* Typewriter role */}
        <div className="text-lg sm:text-xl font-mono text-cyber-bright/90 mt-4 h-8">
          <span className="text-cyber-green/60">&gt; </span>
          <span className="text-cyber-amber">{displayText}</span>
          <span className="inline-block w-2.5 h-5 bg-cyber-green ml-0.5 align-middle animate-pulse-green" />
        </div>

        {/* Subtitle */}
        <div className="text-sm font-mono text-cyber-text/60 mt-3">
          CS Undergraduate · Cybersecurity Enthusiast · Building Safer Systems
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="cyber-btn-filled rounded-lg">
            [ ./explore-work ]
          </a>
          <a href="#contact" className="cyber-btn rounded-lg">
            [ cat resume.pdf ]
          </a>
        </div>
      </div>

      {/* Floating status card */}
      <div className="hidden lg:block absolute top-32 right-8 xl:right-16">
        <div className="terminal-window w-56">
          <div className="terminal-header">
            <div className="terminal-dot bg-cyber-red" />
            <div className="terminal-dot bg-cyber-amber" />
            <div className="terminal-dot bg-cyber-green" />
            <span className="text-[10px] font-mono text-cyber-green/50 ml-2">status.sh</span>
          </div>
          <div className="terminal-body text-[11px] font-mono space-y-1.5">
            <p className="text-cyber-green/80"><span className="text-cyber-green/40">$</span> STATUS: <span className="text-cyber-green">Online</span></p>
            <p className="text-cyber-green/80"><span className="text-cyber-green/40">$</span> UPTIME: <span className="text-cyber-amber">99.9%</span></p>
            <p className="text-cyber-green/80"><span className="text-cyber-green/40">$</span> THREATS: <span className="text-cyber-green">0 detected</span></p>
            <p className="text-cyber-green/80"><span className="text-cyber-green/40">$</span> SHIELD: <span className="text-cyber-green">Active ■</span></p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-cyber-green/30 text-xs font-mono">scroll_down</span>
        <div className="w-5 h-8 rounded-full border border-cyber-green/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-cyber-green/60 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

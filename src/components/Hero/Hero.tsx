import UserImage from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="relative flex flex-col justify-center  items-center min-h-screen bg-gradient-to-b from-[#050816] via-black to-[#050816] text-white px-6 pt-24 "
      >
        <div className="absolute top-1/4 w-[300px] sm:w-[500px]  h-[300px] sm:h-[500px]  bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="mb-8">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden neon-ring flex items-center justify-center">
            <img
              src={UserImage}
              alt="User illustration"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
        <div className="w-full  max-w-2xl  text-center ">
          <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight">
            <div className="text-lg sm:text-md text-slate-300 mb-2">
              Hi, I’m
            </div>
            <span className="text-cyan-400 text-glow"> Kisara Beddawala</span>
          </div>
          <div className="text-md sm:text-lg mt-3 font-semibold">
            A computer science undergraduate
          </div>
          <div className="text-sm sm:text-md mt-2">
            Passionate about cybersecurity, ethical hacking.
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-105 transition-transform duration-300 neon-btn"
            >
              Explore My Work
            </a>
            <a
              href="#View-Resume"
              className="px-6 py-3 rounded-full border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

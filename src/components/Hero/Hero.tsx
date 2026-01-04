const Hero = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center  items-center min-h-screen  ">
        <div className="w-full  sm:w-6/12 text-white   p-10  text-center sm:text-left sm:p-5 ">
          <div className="text-2xl">
            <span className="text-lg">Hi, I’m</span> Kisara Beddawala
          </div>
          <div className="text-lg">A computer science undergraduate</div>
          <div className="text-md">
            Passionate about cybersecurity, ethical hacking.
          </div>
          <div className="mt-5 flex justify-center sm:justify-start">
            <button className="text-lg">Explore My Work</button>
          </div>
          <div className="mt-3 flex justify-center sm:justify-start">
            <a href="#View-Resume" className="text-md">
              View Resume
            </a>
          </div>
        </div>
        <div className="w-full  sm:w-6/12  "></div>
      </div>
    </>
  );
};

export default Hero;

import UserImage from "../../assets/user.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center  items-center min-h-screen  ">
        <div className="w-full  sm:w-6/12 text-white   p-10  text-center sm:text-left sm:p-5 ">
          <div className="text-3xl sm:text-4xl font-mono font-bold">
            <span className="text-xl ">Hi, I’m</span>
            <span className="text-cyan-400"> Kisara Beddawala</span>
          </div>
          <div className="text-md sm:text-lg mt-3 font-semibold">
            A computer science undergraduate
          </div>
          <div className="text-sm sm:text-md mt-2">
            Passionate about cybersecurity, ethical hacking.
          </div>
          <div className="mt-5 flex justify-center sm:justify-start">
            <button className="text-md sm:text-lg">Explore My Work</button>
          </div>
          <div className="mt-3 flex justify-center sm:justify-start">
            <a href="#View-Resume" className="text-md sm:text-lg">
              View Resume
            </a>
          </div>
        </div>
        <div className="w-full  sm:w-6/12 p-10 sm:p-5 m-10 border-2 border-cyan-400 rounded-lg">
          <div className="flex items-center justify-center min-h-[300px] text-white">
            <img
              src={UserImage}
              alt=" grid"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

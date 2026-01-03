import Hero from "./components/Hero/Hero.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="flex sm:flex-row flex-col justify-center  items-center min-h-screen  ">
          <div className="w-full  sm:w-6/12 text-white   p-10  text-center sm:text-left sm:p-5 ">
            <div className="text-2xl">
              <span className="text-lg">Hi, I’m</span> Kisara Beddawala
            </div>
            <div className="text-lg">A computer science undergraduate</div>
            <div className="text-md">
              Passionate about cybersecurity, ethical hacking.
            </div>
          </div>
          <div className="w-full  sm:w-6/12  "></div>
        </div>
      </div>
    </>
  );
}

export default App;

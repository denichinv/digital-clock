import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determine if it's night (6 PM - 6 AM)
  const isNight = time.getHours() >= 18 || time.getHours() < 6;


  // Background class
  const backgroundClass = isNight
    ? "bg-[url(assets/night.png)]"
    : "bg-[url(assets/wallpaper.jpg)]";

  // Transparent gradient classes
  const timeGradient = isNight
    ? "bg-gradient-to-r from-[rgba(147,197,253,0.35)] via-[rgba(129,140,248,0.35)] to-[rgba(168,85,247,0.35)]"
    : " bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500]";

  const dateGradient = isNight
    ? "bg-gradient-to-r from-[rgba(203,213,225,0.35)] via-[rgba(125,211,252,0.35)] to-[rgba(34,211,238,0.35)]"
    : " bg-gradient-to-r from-white via-gray-300 to-white ";

  return (
    <div
      className={`flex justify-center items-center h-dvh ${backgroundClass} bg-no-repeat bg-cover bg-center bg-fixed transition-all duration-500`}
    >
      <div className="backdrop-blur-sm backdrop-opacity-80 backdrop-brightness-90 w-full py-5 text-center px-4">
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-extrabold ${timeGradient} bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out`}
        >
          {time.toLocaleTimeString("en-GB", { hour12: false })}
        </h1>

        <h2
          className={`text-xl sm:text-3xl md:text-5xl lg:text-7xl font-poppins font-light ${dateGradient} bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,0,0,0.3)] transition-all duration-300`}
        >
          {time.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </h2>
      </div>
    </div>
  );
}

export default App;
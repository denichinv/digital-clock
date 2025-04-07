import { useEffect, useState } from "react"

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center items-center h-dvh bg-[url(assets/wallpaper.jpg)] bg-no-repeat bg-cover bg-center">

      <div className="font-mono font-bold backdrop-blur-sm backdrop-opacity-80 backdrop-brightness-90 w-full md:w-full lg:w-full py-5 text-center px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl py-2">{time.toLocaleTimeString("en-GB", { hour12: false })}</h1>
        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl py-2">{time.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</h2>
      </div>

    </div>
  )
}

export default App
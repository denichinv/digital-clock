import { useEffect, useState } from "react"


function App() {
  
  


  const [time,setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    },1000);

    return () => clearInterval(interval)
  }, [])



  

  return (
    <div  className='  outline-solid flex justify-center items-center h-dvh bg-[url(assets/wallpaper.jpg)] bg-no-repeat bg-cover'>

<div className="font-mono font-bold  backdrop-blur-xs backdrop-opacity-80 backdrop-brightness-92 w-full  py-5 text-center">
      <h1 className=" text-9xl py-2px">{time.toLocaleTimeString("en-GB", { hour12: false })}</h1>
      <h2 className="text-7xl py-2">{time.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</h2>
</div>

    </div>
  )
}

export default App

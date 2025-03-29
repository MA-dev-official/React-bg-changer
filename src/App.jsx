import { useState } from "react"

function App() {
  const [color, setColor] = useState("bg-black")

  return (
    <>
      <div className={`h-screen flex items-end justify-center ${color}`}>
        
        <div className=" flex  w-[80%] gap-x-4 p-2 bg-slate-200 rounded-lg justify-evenly">
          <button onClick={()=>setColor("bg-red-500")} className="p-2 bg-red-500 w-1/4 rounded-lg">Red</button>
          <button onClick={()=>setColor("bg-green-500")} className="p-2 bg-green-500 w-1/4 rounded-lg">Green</button>
          <button onClick={()=>setColor("bg-blue-500")} className="p-2 bg-blue-500 w-1/4 rounded-lg">Blue</button>
          <button onClick={()=>setColor("bg-yellow-500")} className="p-2 bg-yellow-500 w-1/4 rounded-lg">Yellow</button>
          <button onClick={()=>setColor("bg-white")} className="p-2 bg-white w-1/4 rounded-lg">White</button>
          <button onClick={()=>setColor("bg-pink-500")} className="p-2 bg-pink-500 w-1/4 rounded-lg">Pink</button>
        </div>
      </div>
    </>

  )
}

export default App

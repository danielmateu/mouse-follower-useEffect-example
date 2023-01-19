import { useState } from "react"
import { useEffect } from "react"
import { FollowMouse } from "./components/FollowMouse"


function App() {

  // const [mounted, setMounted] = useState(true)

  return (
    <main className="flex flex-col gap-4 items-center">
      {/* <h2 className='text-4xl font-semibold'>Proyecto 3</h2> */}
      {/* {mounted && <FollowMouse/>} */}
      {/* <button onClick={() => setMounted(!mounted)}>Limpiar componente</button> */}

      <FollowMouse/>
      
    </main>
    
  )
}

export default App

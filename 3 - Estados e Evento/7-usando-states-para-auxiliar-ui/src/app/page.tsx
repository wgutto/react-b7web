"use client"

import { useState } from "react"

const Page = () => {

  const [mostrarArea, setMostrarArea] = useState(false)

  const botaoArea = () => {
  if(mostrarArea) {
    setMostrarArea(false)
  } else (
    setMostrarArea(true)
  )
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">


      <button onClick={botaoArea} className="bg-blue-600 py-2 px-3 rounded-md cursor-pointer">{mostrarArea ? 'Esconder' : 'Mostrar area'}</button>
      

      {mostrarArea && 
        <div className="bg-yellow-600 px-3 py-2">Area secreta</div>
      }
    </div>
  )
}

export default Page
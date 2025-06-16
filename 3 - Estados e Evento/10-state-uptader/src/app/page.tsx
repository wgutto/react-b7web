"use client"

import { useState } from "react"


const Page = () => {

  const [contador, setContador] = useState(0)

  const adicionar = () => {
    setContador(c => {
      return c + 2
    })

    setContador(c => {
      return c + 2
    })
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">

      <p>{contador}</p>

    <button onClick={adicionar} className="bg-blue-600 py-2 px-3 rounded-md">+2</button>

    </div>
  )
}

export default Page
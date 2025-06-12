"use client"

import { useState } from "react"

const Page = () => {

  const [contador, setContador] = useState(0)

  const adicionar = () => {
    setContador(contador + 1)
  }

  const remover = () => {
    setContador(contador - 1)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      {contador}

      <button onClick={adicionar} className="bg-blue-600 py-2 px-3 rounded-md cursor-pointer">+ 1</button>

      <button onClick={remover} className="bg-blue-600 py-2 px-3 rounded-md cursor-pointer">- 1</button>
    </div>
  )
}

export default Page
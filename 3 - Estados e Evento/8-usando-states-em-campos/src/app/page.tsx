"use client"

import { useState } from "react"


const Page = () => {

  const [nome, setNome] = useState('')

  const mostrarNome = () => {
    console.log(nome)
  }


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">

      <input type="text" 
      className="border bg-white text-black border-white/40 rounded-md py-2 px-3" 
      placeholder="Seu nome" 
      value={nome}
      onChange={event => setNome(event.target.value)} />

      <p>Seu nome e: {nome}</p>

      <button onClick={mostrarNome} className="bg-blue-600 py-2 px-3 rounded-md">Mostrar nome</button>
    </div>
  )
}

export default Page
"use client"

import { FormEvent } from "react"

const Page = () => {

  const aoEnviar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Enviando')
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl">Formulario</h1>

      <form action="" onSubmit={aoEnviar}>
        <input type="text" placeholder="Seu nome" className="border-2 rounded-md mr-4 p-2 border-white/40" />

        <input type="submit" value="Enviar" className="px-3 py-2 bg-blue-600 rounded-md"/>
      </form>
    </div>
  )
}

export default Page
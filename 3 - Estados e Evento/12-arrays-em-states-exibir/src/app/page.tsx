"use client"


import { Tarefas } from "@/types/tarefas"
import { useState } from "react"

const Page = () => {

  const [lista, setLista] = useState<Tarefas[]>([
    { id: 1, texto: 'Fazer algo', checado: true},
    {id: 2, texto: 'Fazer algo 2', checado: false}
  ])

  return (
    <div className="w-screen h-screen flex flex-col items-center">

      <h1 className="text-3xl my-4">Lista de tarefass</h1>

      <div>
        <div className="bg-gray-600 p-4 rounded-md">
          <input type="text" placeholder="O que deseja fazer?" className="border border-black bg-white text-xl text-black outline-none mr-4 rounded-md py-2 px-3" />
          <button className="text-xl">Adicionar</button>
        </div>

        <ul className="mt-4 pl-5 list-disc">
          {lista.map(item => 
            <li key={item.id}>{item.texto} - <button className="hover:underline cursor-pointer">deletar</button></li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Page
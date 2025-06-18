"use client"


import { Tarefas } from "@/types/Tarefas"
import { useState } from "react"

const Page = () => {

  const [lista, setLista] = useState<Tarefas[]>([
    {texto: 'Fazer algo', checado: true},
    {texto: 'Fazer algo 2', checado: false}
  ])
  const [tarefaNova, setTarefaNova] = useState('')


// Funcoes
  const adiconar = () => {
    if(tarefaNova.trim() == '') {
      alert('Preencha o campo primeiro.')
    } else {
      setLista([
        ...lista,
        {texto: tarefaNova, checado: false}
      ])
  }

    setTarefaNova('')
  }

  const deletar = (index: number) => {

    setLista(
      lista.filter((item, key) => key !== index)
    )

  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">

      <h1 className="text-3xl my-4">Lista de tarefass</h1>

      <div>
        <div className="bg-gray-600 p-4 rounded-md">
          <input type="text" placeholder="O que deseja fazer?" className="border border-black bg-white text-xl text-black outline-none mr-4 rounded-md py-2 px-3" value={tarefaNova} onChange={event => setTarefaNova(event.target.value)} />

          <button onClick={adiconar} className="text-xl">Adicionar</button>
        </div>

        <p className="text-center my-4">{lista.length} itens na lista</p>

        <ul className="pl-5 list-disc">
          {lista.map((item, index) => 
            <li key={index}>{item.texto} - <button className="hover:underline cursor-pointer" onClick={() => deletar(index)}>deletar</button></li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Page
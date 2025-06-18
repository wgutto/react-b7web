"use client"


import { Tarefas } from "@/types/Tarefas"
import { useState } from "react"

const Page = () => {

  const [lista, setLista] = useState<Tarefas[]>([
    {id: 1,texto: 'Fazer algo', checado: true},
    {id: 2, texto: 'Fazer algo 2', checado: false}
  ])
  const [tarefaNova, setTarefaNova] = useState('')


// Funcoes
  const adiconar = () => {
    if(tarefaNova.trim() == '') {
      alert('Preencha o campo primeiro.')
    } else {
      setLista([
        ...lista,
        {id: lista.length + 1, texto: tarefaNova, checado: false}
      ])
  }

    setTarefaNova('')
  }

  const deletar = (id: number) => {

    setLista(
      lista.filter(item => item.id !== id)
    )

  }

  const toggleItem = (id: number) => {
    const novaLista = [...lista]
    for(const i in novaLista) {
      if(novaLista[i].id === id) {
        novaLista[i].checado = !novaLista[i].checado
      }
    }

    setLista(novaLista)
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

        <ul>
          {lista.map((item) => 

            <li key={item.id} className="flex items-center gap-2">
              <input onChange={() => toggleItem(item.id)} type="checkbox" checked={item.checado}/>
              {item.texto} - 
              <button className="hover:underline cursor-pointer" onClick={() => deletar(item.id)}>deletar</button>
            </li>

          )}
        </ul>
      </div>

    </div>
  )
}

export default Page
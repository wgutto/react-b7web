"use client"

import { nomeCompletoType } from "@/types/nomeCompletoType"
import { useState } from "react"

const Page = () => {
/*
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
*/

  const [nomeCompleto, setNomeCompleto] = useState<nomeCompletoType>({nome: '', sobrenome: ''})

  const limparNome = () => {
    setNomeCompleto({...nomeCompleto, nome: ''})
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">

      <input type="text"  placeholder="Nome" className="border border-white/40 bg-white text-black outline-none py-2 px-3 rounded-md" value={nomeCompleto.nome} onChange={event => setNomeCompleto({...nomeCompleto, nome: event.target.value})}/>

      <input type="text" placeholder="Sobrenome" className="border border-white/40 bg-white text-black outline-none py-2 px-3 rounded-md" value={nomeCompleto.sobrenome} onChange={event => setNomeCompleto({...nomeCompleto, sobrenome: event.target.value})}/>


      <p>Meu nome completo e: {nomeCompleto.nome + ' ' + nomeCompleto.sobrenome}</p>

      <button onClick={limparNome} className="py-2 px-3 bg-blue-600 rounded-md">Limpar nome</button>

    </div>
  )
}

export default Page
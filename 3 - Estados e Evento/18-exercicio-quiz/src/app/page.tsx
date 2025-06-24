"use client"

import { QuestaoComponente } from "@/components/QuestaoComponente"
import { questoes } from "./data/questoes"
import { useState } from "react"

const Page = () => {
  const [contador, setContador] = useState(0)
  const [respostas, setRespostas] = useState<number[]>([])

  const carregarProximaPergunta = () => {
    if(questoes[contador + 1]) {
      setContador(contador + 1)
    }
  }

  const respostaSelecionadaFunction = (respostaSelecionada: number) => {
    setRespostas([...respostas, respostaSelecionada])
    carregarProximaPergunta()
  }
  return (
    <div className="w-screen h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-md">
        <h1 className="p-4 text-black text-xl font-bold border-b border-black/20">Quiz de FiveM</h1>

        <div className="p-4">
            <QuestaoComponente
              questao={questoes[contador]}
              contador={contador + 1}
              onAnswers={respostaSelecionadaFunction}
            />
        </div>

        <p className="border-t border-black/20 text-center text-black py-4">{contador + 1} de {questoes.length} perguntas</p>
      </div>
    </div>
  )
}

export default Page
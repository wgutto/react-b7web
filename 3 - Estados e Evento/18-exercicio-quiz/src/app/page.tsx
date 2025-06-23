"use client"

import { QuestaoComponente } from "@/components/QuestaoComponente"
import { questoes } from "./data/questoes"

const Page = () => {
  return (
    <div className="w-screen h-screen bg-blue-600 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-md">
        <h1 className="p-4 text-black text-xl font-bold border-b border-black/20">Quiz de FiveM</h1>

        <div className="p-4">
          {questoes.map(item => (
            <QuestaoComponente
            key={item.id}
              questao={item}
            />
          ))}
        </div>

        <p className="border-t border-black/20 text-center text-black py-4">{questoes.length} de {questoes.length} perguntas</p>
      </div>
    </div>
  )
}

export default Page
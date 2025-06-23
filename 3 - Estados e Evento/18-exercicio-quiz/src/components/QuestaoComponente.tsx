import { questao } from "@/types/questao"
import { useState } from "react"

type Props = {
    questao: questao
}

export const QuestaoComponente = ({questao}: Props) => {
    const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null)

    const handleClick = (index: number) => {
        if(respostaSelecionada === null)
        setRespostaSelecionada(index)
    }
    return (
        <div>
            <h1 className="text-3xl text-black font-bold">{questao.id}. {questao.pergunta}</h1>

            <div>
                {questao.respostas.map((item, index) => 
                    <p 
                    key={index} 
                    onClick={() => handleClick(index)}
                    className={`bg-blue-300 border border-blue-400 text-black p-2 my-2 first-letter:uppercase rounded-md

                        ${respostaSelecionada !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                        
                        ${respostaSelecionada !== null && respostaSelecionada === questao.resposta && respostaSelecionada === index && 'bg-green-300 border border-green-400'}

                        ${respostaSelecionada !== null && respostaSelecionada !== questao.resposta && respostaSelecionada === index && 'bg-red-300 border border-red-400'}
                    `}>{item}</p>
                )}
            </div>
        </div>
    )
}
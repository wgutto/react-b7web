import { questao } from "@/types/questao"
import { useState } from "react"

type Props = {
    questao: questao
    contador: number
    onAnswers: (resposta: number) => void 
}

export const QuestaoComponente = ({questao, contador, onAnswers}: Props) => {
    const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null)

    const checarQuestao = (index: number) => {
        if(respostaSelecionada === null) {
        setRespostaSelecionada(index)


        setTimeout(() => {
            onAnswers(index)
        setRespostaSelecionada(null)
        }, 2000)
        }
    }
    return (
        <div>
            <h1 className="text-3xl text-black font-bold">{contador}. {questao.pergunta}</h1>

            <div>
                {questao.respostas.map((item, index) => 
                    <p 
                    key={index} 
                    onClick={() => checarQuestao(index)}
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
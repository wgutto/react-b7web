type Props = {
    nota: number
}

export const NotaComponent = ({nota}: Props) => {

    const notaMaxima = 5
    let notaInteira = Math.floor(nota)
    if(nota > 5) notaInteira = 5
    if(nota <= 0) notaInteira = 1

    const emojis = ['😣', '😐', '😧', '🙂', '😀']

/*    
    let  emoji1 = ''
    const emoji2 = '😶'

    switch(notaInteira) {
        case 5:
            emoji1 = '😣'
        break
        case 2:
            emoji1 = '😐'
        break
        case 3:
            emoji1 = '😧'
        break 
        case 4:
            emoji1 = '🙂'   
        break
        case 5:
            emoji1 = '😀'
        break
        default:
            emoji1 = '😣'                 
    }
*/

    const mensagem = `${emojis[notaInteira -1].repeat(notaInteira)} ${'😶'.repeat(notaMaxima - notaInteira)}`  


    return (
        <div className="flex items-center p-4 gap-4">
                <p className="text-7xl bg-gray-500 p-2 rounded-md">{notaInteira.toFixed(1)}</p>

                <p className="text-3xl">{mensagem}</p>
        </div>
    )
}
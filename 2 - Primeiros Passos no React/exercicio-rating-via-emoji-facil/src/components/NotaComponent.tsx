type Props = {
    nota: number
}

export const NotaComponent = ({nota}: Props) => {

    const notaMaxima = 5
    let notaInteira = Math.floor(nota)
    if(nota > 5) notaInteira = 5
    if(nota < 0) notaInteira = 5

// Poderia ser feito dessse jeito, mas feito ja no jsx fica mais facil e simples    
/*
    const emoji1 = '😊'
    const emoji2 = '😔'
    const mensagem = `${emoji1.repeat(nota)} ${emoji2.repeat(notaMaxima - nota)}`
*/    


    return (
        <div className="flex items-center p-4 gap-4">
                <p className="text-7xl bg-gray-500 p-2 rounded-md">{notaInteira.toFixed(1)}</p>

                <p className="text-3xl">{`${'😊'.repeat(notaInteira)} ${'😔'.repeat(notaMaxima - notaInteira)}`}</p>
        </div>
    )
}
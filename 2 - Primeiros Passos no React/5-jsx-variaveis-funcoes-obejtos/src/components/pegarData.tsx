const pegarDiaAtual = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
}

export const pegarData = () => {
    return (
        <div>
            <p>{pegarDiaAtual()}</p>
        </div>
    )
}
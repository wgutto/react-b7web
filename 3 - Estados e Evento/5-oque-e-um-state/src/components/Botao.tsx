type Props = {
    textoBotao: string
    aoClicar: () => void
}

export const Botao = ({textoBotao, aoClicar}: Props ) => {
    return (
        <button onClick={aoClicar} className="items-center py-2 px-3 bg-blue-600 rounded-md  ">{textoBotao}</button>
    )
}
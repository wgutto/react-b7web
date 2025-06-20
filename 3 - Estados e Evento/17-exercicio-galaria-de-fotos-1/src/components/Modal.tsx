type Props = {
    foto: string
    fecharModal: () => void
}

export const Modal = ({foto, fecharModal}: Props) => {
    return (
        <div>
            <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center" onClick={fecharModal}>
                <img src={`/assets/${foto}`} alt="" className="max-w-screen max-h-screen"/>
            </div>
            <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={fecharModal}>
                X
            </div>
        </div>
    )
}
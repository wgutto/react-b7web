type Props = {
    foto: string
    fecharModalFunction: () => void
}

export const Modal = ({foto, fecharModalFunction}: Props) => {
    return (
        <div>
            <div onClick={fecharModalFunction} className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/50">
                <img src={`assets/${foto}`} alt="" className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={fecharModalFunction} className="text-5xl text-white fixed top-5 right-5 cursor-pointer">
                X
            </div>
        </div>
    )
}
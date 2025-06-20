import { fotoType } from "@/types/fotoType"

type Props = {
    foto: fotoType
    onClick: () => void
}

export const FotoItem = ({foto, onClick}: Props) => {
    return (
        <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
            <img src={`/assets/${foto.url}`} alt="" className="w-full h-full rounded-md" />
        </div>
    )
}
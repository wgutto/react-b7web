import { fotoType } from "@/types/fotoType"

type Props = {
    foto: fotoType
    onClick: () => void
}

export const FotoItem = ({foto, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-50">
            <img src={`assets/${foto.url}`} alt="" className="w-full h-full rounded-md" />
        </div>
    )
}
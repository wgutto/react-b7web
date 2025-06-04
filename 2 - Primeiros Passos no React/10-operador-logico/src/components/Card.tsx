type Props = {
    phrase: string
    autor?: string
}
export const Card = ({phrase, autor}: Props) => {

    return (
        <div className="border-2 border-red-500 p-2 text-center rounded-md">
            <p className="text-3xl italic">&quot;{phrase}&quot;</p>


            {autor &&
                <h2 className="text-right underline">{autor ? autor : "Autor deconhecido"}</h2>
            }
        </div>
    )
}
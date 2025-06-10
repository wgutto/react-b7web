import { estudantesType } from "@/types/estudantesType"

type Props = {
    estudantes: estudantesType[]
}

export const TabelaEstudante = ({estudantes}: Props) => {


    return (
        <table className="w-full rounded-md overflow-hidden">
            <thead>
                <tr className="bg-gray-800 border-gray-600">
                    <th className="text-left p-3">Nome</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Nota 1</th>
                    <th className="p-3">Nota 2</th>
                    <th className="p-3">Nota final</th>
                </tr>
            </thead>
            <tbody>
                {estudantes.map(item => 
                    <tr key={item.id} className="text-center bg-gray-400 text-gray-900 border-b-1 border-black/40">

                        <td className="flex gap-3 items-center p-3 text-sm">
                                <img src={item.foto} alt={item.nome} className="w-10 rounded-full" />

                                <div className="text-left">
                                    <h1 className="font-bold">{item.nome}</h1>
                                    <p>{item.email}</p>
                                </div>
                        </td>

                        <td>
                            {item.ativo && <div className="px-2 py-1 inline-block bg-green-800 text-white text-xs rounded-md">Ativo</div>}
                            {!item.ativo && <div className="px-2 py-1 inline-block bg-red-800 text-white text-xs rounded-md">Inativo</div>}
                        </td>

                        <td>{item.nota1.toFixed(1)}</td>

                        <td>{item.nota2.toFixed(1)}</td>

                        <td className="font-bold">
                            {item.ativo ? ((item.nota1 + item.nota2) / 2).toFixed(2) : '--'}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
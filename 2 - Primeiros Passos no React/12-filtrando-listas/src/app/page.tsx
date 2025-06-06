import { pessoas } from "@/data/pessoas"

  const quimicos = pessoas.filter(item => item.profissao == 'Developer')

const Page = () => {
  return (
    <div className="p-4">

      {pessoas.length > 0 &&
        <ul>
          {pessoas.map(item => 
            <li key={item.id} className="flex gap-2">{item.nome} - <p className="underline">{item.profissao}</p></li>
          )}

          {quimicos.map(item => 
            <li key={item.id}>Lista filtrada com apenas DEVs: {item.nome}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default Page
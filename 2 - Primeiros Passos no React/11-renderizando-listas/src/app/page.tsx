import { pessoas } from "@/data/pessoas"

const Page = () => {
  return (
    <div className="p-4">

      {pessoas.length > 0 &&
        <ul>
          {pessoas.map(item => 
            <li key={item.id} className="flex gap-2">{item.nome} - <p className="underline">{item.profissao}</p></li>
          )}
        </ul>
      }
    </div>
  )
}

export default Page
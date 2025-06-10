import { TabelaEstudante } from "@/components/TabelaEstudante"
import { estudantes } from "@/data/estudantes"

const Page = () => {
  return (
    <div className="container mx-auto">
      <TabelaEstudante
        estudantes={estudantes}
      />
    </div>
  )
}

export default Page
import { Person } from "@/components/Person"

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Formas Geometricas</h1>
      <p className="text-xl">Quadrado e Circulo</p>

      <div>
        <Person
        name='Elon Musk'
        avatar='https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg'
        roles={['CEO Tesla', 'CEO SpaceX']}
        />

        <Person
        name='Jeff Bezos'
        avatar='https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/37320_962FB62D35C90349.jpeg?w=1200&h=900&crop=0'
        roles={['CEO Amazon', 'CEO Blue Origin']}
        />
      </div>
    </div>
  )
}

export default Page
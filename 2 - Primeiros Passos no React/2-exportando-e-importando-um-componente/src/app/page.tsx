import { Circle, Square } from "@/components/Geo"

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Formas Geometricas</h1>
      <p className="text-xl">Quadrado e Circulo</p>

      <div className="flex py-2 gap-10">
        <Square/>
        <Circle/>
      </div>
    </div>
  )
}

export default Page
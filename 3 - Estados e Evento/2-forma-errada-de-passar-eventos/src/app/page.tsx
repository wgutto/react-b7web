"use client"

const Page = () => {
  const AoClicar = (mensagem: string) => {
    alert(mensagem)
  }
  return (
    <div className="container mx-auto">
      <button onClick={() => AoClicar('Mensagem 1')} className="px-2 py-3 bg-blue-600 rounded-md mr-3">Clique aqui 1 </button>
      <button onClick={() => AoClicar('Mensagem 2')} className="px-2 py-3 bg-blue-600 rounded-md">Clique aqui</button>
    </div>
  )
}

export default Page
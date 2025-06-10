"use client"

const Page = () => {
  const AoClicar = () => {
    alert('Clicou')
  }
  return (
    <div className="container mx-auto">
      <button onClick={AoClicar} className="px-2 py-3 bg-blue-600 rounded-md">Clique aqui</button>
    </div>
  )
}

export default Page
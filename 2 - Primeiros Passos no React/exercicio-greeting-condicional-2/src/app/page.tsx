"use client"


const Page = () => {

  const data = new Date()

  const hora = 19
  const minutos = data.getMinutes()

  let menssagem = ''
  let background = ''


  return (
    <div className={`flex flex-col justify-center items-center w-screen h-screen ${background}`}>
      <h1 className="text-8xl">{hora}:{minutos}</h1>
      <p className="text-3xl">
        {hora >= 0 && hora < 12 && "Bom dia"}
        {hora >= 12 && hora < 18 && "Boa tarde"}
        {hora >= 18 && hora < 24 && "Boa noite"}
      </p>
    </div>
  )
}

export default Page
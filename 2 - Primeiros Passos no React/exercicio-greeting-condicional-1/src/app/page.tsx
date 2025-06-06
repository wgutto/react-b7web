"use client"


const Page = () => {

  const data = new Date()

  const hora = 24
  const minutos = data.getMinutes()

  let menssagem = ''
  let background = ''

  if(hora >= 0 && hora < 12) {
      menssagem = 'Bom dia'
      background = 'bg-grey-100'
  } else if (hora >= 12 && hora < 18) {
    menssagem = 'Boa tarde'
    background = 'bg-orange-200'
  } else if (hora >= 18 && hora < 24) {
    menssagem = 'Boa noite'
    background = 'bg-blue-900 text-white'
  }

  return (
    <div className={`flex flex-col justify-center items-center w-screen h-screen ${background}`}>
      <h1 className="text-8xl">{hora}:{minutos}</h1>
      <p className="text-3xl">{menssagem}</p>
    </div>
  )
}

export default Page
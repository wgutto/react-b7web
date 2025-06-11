"use client"

import { Botao } from "@/components/Botao"

const Page = () => {

  const ClicouBotao1 = () => {
    alert('Clicou no botao 1')
  }
  const ClicouBotao2 = () => {
    alert('Clicou no botao 2')
  }
  const ClicouBotao3 = () => {
    alert('Clicou no botao 3')
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Botao
        textoBotao="Clique no botao 1"
        aoClicar={ClicouBotao1}
      />
      <Botao
        textoBotao="Clique no botao 2"
        aoClicar={ClicouBotao2}
      />
      <Botao
        textoBotao="Clique no botao 3"
        aoClicar={ClicouBotao3}
      />
    </div>
  )
}

export default Page
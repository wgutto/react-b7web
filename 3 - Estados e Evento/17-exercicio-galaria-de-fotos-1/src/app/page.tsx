"use client"

import { FotoItem } from "@/components/FotoItem"
import { Modal } from "@/components/Modal"
import { listaFotos } from "@/data/listaFotos"
import { useState } from "react"

const Page = () => {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [fotoModal, setFotoModal] = useState('')

  const abrirModal = (id: number) => {
    const foto = listaFotos.find(item => item.id === id)

    if(foto) {
      setFotoModal(foto.url)
      setMostrarModal(true)
    }
  }

  const fecharModal = () => {
      setMostrarModal(false)
    }
  return (
    <div className="mx-2">

      <h1 className="text-center text-3xl font-bold mt-10">Fotos</h1>
      
      <p className="text-center my-5">{listaFotos.length} fotos mostradas.</p>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaFotos.map(item => (
            <FotoItem
              key={item.id}
              foto={item}
              onClick={() => {abrirModal(item.id)}}
            />
        ))}


        {mostrarModal && 
          <Modal
            foto={fotoModal}
            fecharModal={fecharModal}
          />
        }
      </section>
    </div>
  )
}

export default Page
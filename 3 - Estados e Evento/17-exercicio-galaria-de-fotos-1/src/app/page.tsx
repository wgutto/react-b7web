"use client"


import { FotoItem } from "@/components/FotoItem"
import { Modal } from "@/components/Modal"
import { listaFotos } from "@/data/listaFotos"
import { useState } from "react"

const Page = () => {
    const [abrirModal, setAbrirModal] = useState(false)
    const [fotoModal, setFotoModal] = useState('')

    const abrirModalFunction = (id: number) => {
        const foto = listaFotos.find(item => item.id === id)

        if(foto) {
            setFotoModal(foto.url)
            setAbrirModal(true)
        }


    }

    const fecharModalFunction = () => {
        setAbrirModal(false)
    }
    return (
        <div className="px-4">
            <h1 className="text-4xl text-center py-8">Fotos</h1>

            <section className="container max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {listaFotos.map(item => (
                    <FotoItem
                        key={item.id}
                        foto={item}
                        onClick={() => {abrirModalFunction(item.id)}}
                    />
                ))}
            </section>

            {abrirModal && 
                <Modal
                    foto={fotoModal}
                    fecharModalFunction={fecharModalFunction}
                />
            }

        </div>
    )
}

export default Page
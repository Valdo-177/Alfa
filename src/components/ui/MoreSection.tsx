import React from 'react'
import chanbi from '@/assets/chambin.jpg'
import Image from 'next/image'

const MoreSection = () => {
    return (
        <section className=''>
            <div className='sm:w-[80rem] mx-auto flex items-center justify-center sm:h-[40rem]' id='Nuestro Propósito'>
                <div className='flex items-center gap-7 flex-col sm:flex-row px-4 sm:px-0'>
                    <div className='sm:w-[50%] flex flex-col gap-3 items-center'>
                        <div className='w-full'>
                            <h4 className='text-[#36BA6F] text-2xl'>Nuestro Propósito</h4>
                            <h2 className='text-3xl font-semibold w-full'>Impulsando la Energía <br /> Solar con Propósito</h2>
                        </div>
                        <p className='text-lg font-normal'>En Alfa, nuestro compromiso es claro: liderar la transición hacia un futuro más sostenible mediante soluciones tecnológicas avanzadas. Creemos en la importancia de la energía solar como un recurso renovable clave y trabajamos incansablemente para ofrecer medidores de temperatura que optimicen su rendimiento.</p>
                        <div className=''>
                            <p className='text-lg font-semibold list-item ml-5'>Innovación Sostenible:</p>
                            <p>Cada producto Alfa está diseñado para respaldar la sostenibilidad ambiental mediante el uso eficiente de recursos y un impacto positivo en la transición energética.</p>
                        </div>
                        <div className=''>
                            <p className='text-lg font-semibold list-item ml-5'>Calidad Inquebrantable:</p>
                            <p>Nuestros medidores están fabricados con materiales y tecnología de vanguardia, asegurando durabilidad y precisión, incluso en las condiciones más extremas.</p>
                        </div>
                        <div className=''>
                            <p className='text-lg font-semibold list-item ml-5'>Compromiso con el Futuro:</p>
                            <p>En Alfa, trabajamos hoy para construir el mañana. Nuestro propósito es contribuir activamente al avance de la energía renovable en todo el mundo.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2 sm:w-[50%]'>
                        <Image src={chanbi} alt='' className='sm:w-[27rem] h-[32rem] object-cover rounded-[24px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreSection
import React from 'react'
import circuito1 from '@/assets/circuito1.jpg'
import circuito2 from '@/assets/circuito2.jpg'
import prueba from '@/assets/prueba.jpg'
import diseño from '@/assets/diseño.jpg'
import Image from 'next/image'

interface ICardProcess {
    label: string;
    title: string;
    description: string;
    img: string;
}

const CardProcess = ({ data }: { data: ICardProcess }) => {
    const { description, img, label, title } = data;
    return (
        <div className='rounded-[18px] overflow-hidden border shadow-lg sm:w-[24rem] h-[30rem]'>
            <Image src={img} alt='' width={500} height={500}/>
            <div className='p-5'>
                <span className='text-[#00B5E2]'>{label}</span>
                <h5 className='text-xl font-semibold'>{title}</h5>
                <p className='text-[#737B8F]'>{description}</p>
            </div>
        </div>
    )
}

const ProcessSection = () => {

    const DataCardProcess = [
        {
            label: 'Etapa 1',
            title: 'Diseño y Desarrollo:',
            description: 'Nuestro equipo de expertos comienza con la innovación, creando medidores que combinan funcionalidad, estética y resistencia.',
            img: diseño.src
        },
        {
            label: 'Etapa 2',
            title: 'Pruebas de Resistencia:',
            description: 'Realizamos pruebas en condiciones extremas, simulando agua, polvo, vientos fuertes y altas temperaturas para garantizar un rendimiento confiable.',
            img: prueba.src
        },
        {
            label: 'Etapa 3',
            title: 'Entrega de Excelencia:',
            description: 'Cada medidor se somete a inspecciones finales para asegurar que cumpla con los estándares Alfa y esté listo para cualquier desafío.',
            img: circuito1.src
        },
    ]


    return (
        <section className='px-4 sm:px-0 py-8 sm:py-0' id='Nuestro Proceso'>
            <div className='sm:w-[80rem] mx-auto flex flex-col-reverse sm:flex-row items-center gap-5 sm:h-[30rem]'>
                <div className='sm:w-1/2 flex sm:items-start items-center flex-col sm:flex-row justify-center gap-8'>
                    <Image src={circuito1} alt='' className='w-[17rem] h-[23rem] object-cover rounded-[24px] shadow-lg' />
                    <Image src={circuito2} alt='' className='w-[15rem] h-[18rem] object-cover rounded-[24px] shadow-lg' />
                </div>
                <div className='sm:w-1/2'>
                    <h4 className='text-[#36BA6F] text-2xl'>Nuestro Proceso</h4>
                    <h2 className='text-3xl font-semibold w-full'>De la Innovación a la Perfección</h2>
                    <p className='text-lg font-normal'>En Alfa, cada detalle cuenta. Desde el diseño inicial hasta la entrega final, nuestros procesos están guiados por la excelencia técnica y el compromiso con la calidad. Nos aseguramos de que cada medidor cumpla con los más altos estándares de rendimiento.</p>
                </div>
            </div>
            <div className='sm:w-[80rem] mx-auto sm:h-[35rem] flex items-center justify-center mt-8 sm:mt-0'>
               <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-5'>
               {DataCardProcess.map((item, index) => (
                    <CardProcess data={item} key={index} />
                ))}
               </div>
            </div>
        </section>
    )
}

export default ProcessSection
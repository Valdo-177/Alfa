import React from 'react'
import { Button } from './button'
import Image from 'next/image';
import GlobalSvg from '@/assets/Ic_Globe.svg'
import CardHero from './CardHero';

const IconGlobal = () => {
    return(
        <Image src={GlobalSvg} alt=''/>
    )
};

const HeroSection = () => {
    return (
        <div className='flex items-center gap-5 flex-col justify-center sm:h-screen bg-slate-700 hero text-white relative pt-[7rem] pb-6 sm:pt-0 sm:pb-0 px-4'>
            <div className=' flex flex-col sm:flex-row items-start gap-7 justify-between sm:w-[60rem]'>
                <div className='w-[18rem]'>
                    <h1 className='font-bold text-6xl mb-3'>ALFA</h1>
                    <span className='text-lg'>Dedicados en medición de temperatura para paneles solares</span>
                </div>
                <div className='sm:w-[30rem] flex flex-col items-center sm:items-start gap-4'>
                    <h3 className='text-4xl font-semibold text-center sm:text-start'>Tu solución confiable en medidores de temperatura de alta resistencia</h3>
                    <p className='text-lg text-center sm:text-start'>Diseñados para soportar las condiciones más extremas, nuestros productos te garantizan rendimiento y durabilidad.</p>
                    <Button className='bg-transparent hover:bg-transparent shadow-none text-lg flex items-center gap-3 hover:gap-5 w-40 transition-all ease-in-out'>Ver más <IconGlobal/></Button>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-end sm:w-[60rem] sm:absolute -bottom-[6rem]'>
                <div>
                    <CardHero/>
                </div>
                <div className='hidden sm:flex flex-col items-start justify-center bgMst p-[1rem] h-[7rem] w-[37rem] mb-[5.7rem]'>
                    <p className='text-lg w-[85%]'>Reducir el carbono y los costos al tiempo que se proporciona energía sostenible, confiable y asequible</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
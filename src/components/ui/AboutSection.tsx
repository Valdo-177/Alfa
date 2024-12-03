import Image from 'next/image'
import React from 'react'
import nosotros from '@/assets/nosotros.png'

const AboutSection = () => {
    return (
        <section className='sm:h-[45rem] flex items-center justify-center px-4 sm:px-0' id='Quiénes Somos'>
            <div className='sm:w-[80rem] mx-auto flex flex-col gap-2 items-start relative overflow-hidden sm:overflow-visible'>
                <h4 className='text-[#36BA6F] text-2xl'>Quiénes Somos</h4>
                <h2 className='text-3xl font-semibold sm:w-[30rem]'>En Alfa, somos líderes en la fabricación de medidores de temperatura para paneles solares. </h2>
                <p className='sm:w-[30rem] text-lg font-normal'>Desde nuestra sede en la Universidad del Norte, Barranquilla, diseñamos productos resistentes a las condiciones más extremas: agua, polvo, viento y altas temperaturas</p>
                <Image src={nosotros} alt='' className='mt-4 sm:mt-0 sm:absolute -right-[23rem] -top-[12rem] transform translate-x-[13px] sm:-translate-x-[4rem]' />
            </div>
        </section>
    )
}

export default AboutSection
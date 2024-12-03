import React from 'react'
import welcome1 from '@/assets/welcomeImg1.png'
import welcome2 from '@/assets/hero2.jpg'
import waterCard from '@/assets/water.png'
import nube from '@/assets/Cloud.png'
import Image from 'next/image'

const WelcomeSection = () => {
    return (
        <section className='sm:h-[60rem] bg-white flex pb-[5rem] items-end justify-center' id='Bienvenidos'>
            <div className='container flex items-center justify-center gap-10 px-4 sm:px-0 pt-8'>
                <div className='hidden sm:block relative'>
                    <Image src={welcome1} alt='' className='w-[26rem]' />
                    <Image src={waterCard} alt='' className='w-[12rem] -right-[7rem] absolute top-[17rem]' />
                </div>
                <div>
                    <div className='mb-6 relative'>
                        <h2 className='text-5xl font-semibold'>¡Bienvenido a Alfa!</h2>
                        <h3 className='text-3xl font-semibold sm:w-[30rem]'>Descubre nuestros medidores de temperatura para paneles solares de alta resistencia</h3>
                    <Image src={nube} alt='' className='w-[26rem] -right-[9rem] absolute -top-[10rem] blur-[0.2rem] hidden sm:block' />
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-8'>
                        <Image src={welcome2} alt='' className='w-[20rem] rounded-[20px]' />
                        <p className='sm:w-[30rem] text-lg font-normal'>
                            En Alfa, nos dedicamos a impulsar la eficiencia y la sostenibilidad energética con nuestros medidores de temperatura especialmente diseñados para paneles solares.
                            Nuestros dispositivos combinan precisión, durabilidad y tecnología de punta para soportar las condiciones más extremas. Ya sea bajo el calor abrasador, tormentas de viento, polvo o incluso inmersión en agua, nuestros medidores están construidos para garantizar un rendimiento excepcional en cualquier entorno.
                            <span className='mb-3'/>
                            Optar por Alfa es elegir innovación y confiabilidad para optimizar el rendimiento de tus sistemas solares. ¡Únete al futuro de la energía sostenible con soluciones que marcan la diferencia!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection
import { BicepsFlexed, Brain, Cable } from 'lucide-react'
import React from 'react'

interface ICardTeam {
    icon: React.ReactElement
    title: string;
    description: string;
}

const CardTeam = ({ data }: { data: ICardTeam }) => {

    const { description, icon, title } = data;

    return (
        <div className='sm:w-[16rem] p-4 rounded-[16px] shadow-lg border sm:h-[15.5rem]'>
            <div className='bg-blue-600 w-[max-content] h-[max-content] p-3 rounded-[32px_2pc_2pc_0] mb-3'>
                {icon}
            </div>
            <span className='text-xl font-semibold'>{title}</span>
            <p className='text-[#737B8F]'>{description}</p>
        </div>
    )
}

const TeamSection = () => {

    const dataCardTeam = [
        {
            icon: <Brain />,
            title: 'Expertos en Innovación:',
            description: 'Nuestros ingenieros y diseñadores lideran el desarrollo de tecnologías avanzadas que redefinen los estándares de la industria.'
        },
        {
            icon: <BicepsFlexed />,
            title: 'Compromiso con la Sostenibilidad:',
            description: 'Cada miembro del equipo aporta su experiencia para garantizar productos alineados con la preservación del medio ambiente.'
        },
        {
            icon: <Cable />,
            title: 'Trabajo Colaborativo:',
            description: 'En Alfa, creemos que el trabajo en equipo impulsa la excelencia. Juntos, creamos soluciones que marcan la diferencia.'
        },
    ]

    return (
        <section id='Nuestro Equipo'>
            <div className='sm:w-[80rem] mx-auto flex items-center flex-col sm:h-[34rem] justify-center px-4 sm:px-0'>
                <h4 className='text-[#36BA6F] text-2xl'>Nuestro Equipo</h4>
                <h2 className='text-3xl font-semibold'>La Fuerza Detrás de Alfa</h2>
                <p className='text-lg font-normal sm:w-[36rem] text-center'>Alfa no solo es tecnología, es pasión y visión. Nuestro equipo está formado por ingenieros, diseñadores y profesionales que comparten un objetivo común: revolucionar la forma en que aprovechamos la energía solar.</p>
               <div className='flex items-center flex-col sm:flex-row gap-6 my-7'>
               {dataCardTeam.map((item, index) => (
                    <CardTeam key={index} data={item} />
                ))}
               </div>
            </div>
        </section>
    )
}

export default TeamSection
import { Thermometer } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex items-center flex-col gap-4 bg-[#042160e8] backdrop-blur-lg sm:h-[8rem] px-4 sm:px0 py-5 sm:py-0 text-white justify-center'>
            <div className='container mx-auto flex flex-col sm:flex-row sm:items-center items-start justify-between gap-5'>
                <div className="flex items-center gap-1">
                    <Thermometer />
                    <span className="font-bold text-xl">ALFA</span>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Conéctate con Alfa</h4>
                    <p>Alfa: innovación y calidad en medición para energía solar sostenible.</p>
                </div>
            </div>
            <span>© 2024 Alfa. Todos los derechos reservados.</span>
        </footer>
    )
}

export default Footer
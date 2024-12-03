import Image from 'next/image'
import React from 'react'
import Video from '@/assets/heroLed.jpg'

const CardHero = () => {
    return (
        <div className='bg-[#f7f7f7] shadow p-5 text-black rounded-[24px] flex flex-col items-center gap-8 w-[22rem]'>
            <div className='flex flex-col items-center'>
                <span className='text-7xl font-bold text-[#0052B4]'>+1</span>
                <p className='font-semibold text-xl w-[17rem] text-center'>Soluciones duraderas para un mundo sostenible.</p>
            </div>
            <Image src={Video} alt='' className='rounded-[8px] h-[14rem] object-cover'/>
        </div>
    )
}

export default CardHero
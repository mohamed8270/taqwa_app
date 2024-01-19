"use client"

import React from 'react'
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className='sm:px-10 sm:pt-10 max-w-[560px] sm:h-[600px] h-[400px] justify-center items-center w-full rounded-[30px] sm:mx-auto'>
        <Image 
        src = 'https://static.vecteezy.com/system/resources/previews/031/647/871/non_2x/3d-ramadan-kareem-islamic-mosque-masjid-conept-ai-generative-free-png.png'
        alt = "Mosque"
        height = {484}
        width = {484}
        className='image-contain'
        priority
        />
    </div>
  )
}

export default HeroBanner
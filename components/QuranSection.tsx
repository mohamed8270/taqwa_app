'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import ButtonRepo from '../components/ButtonRepo';

const QuranSection = () => {
  const router = useRouter();
  return (
    <>
        <div className='font-poppins sm:px-16 px-6 py-12 mx-auto max-w-10xl'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-Tblack font-bold sm:text-[32px] text-[22px]'>Learn Quran</h1>
                <h1 className='text-Twhite font-medium sm:text-[12px] text-[10px] bg-Tgreen p-[10px] rounded-full'>Learn Arabic</h1>
            </div>
            <div className='flex flex-wrap max-xl:flex-col justify-between py-4'>
                <div className='flex-1'>
                  <Image alt='quran-image' src='https://static.vecteezy.com/system/resources/previews/006/892/273/non_2x/qiroatul-qur-an-read-al-qur-an-3d-islamic-holy-bible-illustration-free-vector.jpg' width={500} height={500} className='rounded-lg'/>
                </div>
                <div className='flex-1'>
                  <h1 className='text-Tblack font-bold text-[32px] py-[2px]'>Read the Quran with ease and know the meaning</h1>
                  <p className='text-Tblack text-opacity-50 text-[13px] py-[10px] text-justify'>Why is reciting the Quran important? A new revert to Islam answered this question by saying: “The Quran is a guide on how to avoid calamities in life among many other things. In my personal opinion, I feel all children and teens should be taught what is prescribed for us, Muslims and non-Muslims, to teach them to be respectful adults and avoid economic and social stressors,”.</p>
                  <ButtonRepo type={`button`} click={() => router.push('/quranreading')} txt={`Start Reading`} styles={`h-[40px] w-[120px] text-[12px] bg-Tyellow text-Twhite  mt-[40px]`}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuranSection
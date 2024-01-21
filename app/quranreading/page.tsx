'use client'

import React,{useState, FormEvent} from 'react'
import Image from 'next/image'
import {QuranVerse, QuranVerseArabic} from '../../lib/actions/index';


interface QuranResponse {
    text: string;
  }

interface QuranArabicResponse {
    text: string;
  }

const QuranReadingPage = () => {

    const [QuranSearch, setQuranSearch] = useState('');
    const [QuranOutput, setQuranOutput] = useState<QuranResponse | string>('');
    const [QuranArabic, setQuranArabic] = useState<QuranArabicResponse | string>('');
    const [isLoading, setisLoading] = useState(false);

    const handleChatSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(QuranSearch === '') return alert('Please Input Something!');
        try {
            setisLoading(true);
            const output = await QuranVerse(QuranSearch);
            const arabicoutput = await QuranVerseArabic(QuranSearch);
            console.log(arabicoutput);
            // console.log(output);
            setQuranOutput(output);
            setQuranArabic(arabicoutput);
            setQuranSearch('');
        } catch (error) {
            throw new Error(`Failed to get data: ${error}`); 
        } finally {
            setisLoading(false);
        }
    }

  return (
    <>
        <div className='font-poppins bg-Twhite mx-auto py-[40px] h-screen'>
            <div className='sm:px-16 px-6 justify-center items-center bg-Twhite'>
                <div className='flex justify-center'>
                    <Image alt='quran-svg' src='https://cdn.quranonline.net/wp-content/uploads/2020/09/Koran-Kareem.svg' width={200} height={200} className=''/>
                </div>
                <form onSubmit={handleChatSubmit} className='flex flex-wrap gap-4 justify-center items-center py-[20px]'>
                    <input value={QuranSearch} onChange={(e) => setQuranSearch(e.target.value)} type="text" placeholder='What do you want to read?' className='h-[40px] sm:w-[360px] w-[260px] text-[12px] font-medium text-Tblack pl-[10px] pr-[10px] border-2 border-gray-200 rounded-lg focus:border-Tgreen focus:outline-none' />
                    <button disabled={QuranSearch === ''} type='submit' className='h-[40px] w-[85px] text-[12px] bg-Tgreen text-Twhite font-medium  rounded-lg'>{isLoading ? 'Searching' : 'Search'}</button>
                </form>
                <div className='flex flex-col'>
                {Array.isArray(QuranArabic) && (
                            QuranArabic.map((arabicVerse, index) => (
                                <div key={index} className='flex flex-col py-[30px]'>
                                    <p className='text-Tblack text-[36px] hover:text-Tyellow text-right font-medium py-[5px] sm:px-[120px] flex-wrap font-arabic'>{`${arabicVerse.text}`}</p>
                                    {Array.isArray(QuranOutput) && QuranOutput[index] && (
                                        <p className='text-Tblack text-opacity-50 text-[14px] hover:text-opacity-80 text-justify font-medium py-[10px] sm:px-[120px] flex-wrap font-tamil'>{`${QuranOutput[index].text}`}</p>
                                    )}
                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>
    </>
  )
}

export default QuranReadingPage
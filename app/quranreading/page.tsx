'use client'

import React,{useState, FormEvent} from 'react'
import Image from 'next/image'
import {QuranVerse, QuranVerseArabic} from '../../lib/actions/index';



interface QuranResponse {
    text: string;
  }

interface QuranArabicResponse {
    text: string;
    chapter: string;
    verse: string;
  }

const QuranReadingPage = () => {

    const [QuranSearch, setQuranSearch] = useState<string>('');
    const [QuranOutput, setQuranOutput] = useState<QuranResponse[]>([]);
    const [QuranArabic, setQuranArabic] = useState<QuranArabicResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
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



    const handleCopyText = async (arabicText: string, translatedText: string) => {
        const textToCopy = `Arabic: ${arabicText}\nTranslation: ${translatedText}`;
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert('Text copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };

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

                <div className='flex flex-col pt-[60px]'>
                {Array.isArray(QuranArabic) && (
                            QuranArabic.map((arabicVerse, index) => (
                            <div key={index} className='flex flex-col'>  
                                    <div className='flex sm:mx-[120px] items-center gap-2'>
                                        <h1 className='text-Tblack text-[15px] font-medium text-opacity-50'>{`${arabicVerse.chapter}:${arabicVerse.verse}`}</h1>
                                        <Image src='https://www.svgrepo.com/show/520667/copy.svg' height={25} width={25} alt='Copy' className='opacity-50 cursor-pointer' onClick={() => handleCopyText(arabicVerse.text, QuranOutput[index]?.text || '')} />
                                        <Image src='https://www.svgrepo.com/show/520898/play-2.svg' height={25} width={25} alt='Play' className='opacity-50' />
                                        <Image src='https://www.svgrepo.com/show/520943/share.svg' height={25} width={25} alt='Play' className='opacity-50' />
                                    </div>
                                <div key={index} className='flex flex-col py-[30px]'>
                                    <p className='text-Tblack text-[36px] text-right font-medium py-[5px] sm:px-[120px] flex-wrap font-arabic'>{`${arabicVerse.text}`}</p>
                                    {Array.isArray(QuranOutput) && QuranOutput[index] && (
                                        <p className='text-Tblack text-opacity-100 text-[14px] text-justify font-medium py-[10px] sm:px-[120px] flex-wrap font-tamil leading-loose'>{`${QuranOutput[index].text}`}</p>
                                    )}
                                    <hr className='my-4 border-Tblack border-opacity-20 sm:mx-[120px]' />
                                </div>
                            </div>
                            ))
                        )}   
                </div>
            </div>
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    </>
  )
}

export default QuranReadingPage
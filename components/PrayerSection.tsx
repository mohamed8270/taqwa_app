"use client"

import React,{useState, useEffect} from 'react'
import {YouTubeVideoLive, PrayerTimeFunction} from '../lib/actions/index';
import PrayerTiming from '../components/PrayerTiming';

const PrayerSection = () => {

    const [liveStreamUrl, setLiveStreamUrl] = useState<string | null>(null);

    useEffect(() => {
      const fetchLiveStream = async () => {
        try {
            const liveStreamVideoId = await YouTubeVideoLive();
    
            if (liveStreamVideoId) {
              setLiveStreamUrl(`https://www.youtube.com/embed/${liveStreamVideoId}`);
            }
          } catch (error) {
            console.error('Error in fetchLiveStream:', error);
          }
      };
  
      fetchLiveStream();
    }, []);


  return (
    <>
    <section className='font-poppins sm:px-16 px-6 py-12 mx-auto max-w-10xl'>
        <div className='flex max-xl:flex-col gap-16 justify-between'>
            <div className='flex-1 flex-wrap flex-col justify-center'>
                <h1 className='text-[32px] font-bold text-Tblack'>Masjid's Daily Prayers Time According to Islamic Law</h1>
                <p className='text-[13px] text-Tblack text-opacity-50 py-[10px] text-justify'>The Salat is the time when the meeting with Allah and ascension of the believer takes place, "We all know the importance of this obligatory act and we do not wish to delive into that area"</p>
                <PrayerTiming/>
            </div>
            <div className='flex-1 flex-wrap flex-col justify-center'>
                <h1 className='text-[18px] text-Tblack font-bold'>Witness the pleasure of mecca live and Hear the mealodious<span className='text-Tgreen'> voice of quran verses</span></h1>
                <p className='text-[13px] text-Tblack text-opacity-50 py-[10px] text-justify'>Allah, may He be exalted, has commanded the believers to listen to the Quran attentively, in a general command. He says (interpretation of the meaning): “So, when the Quran is recited, listen to it, and be silent that you may receive mercy” [al-A‘raaf 7:204].</p>
                <div className='relative aspect-w-16 aspect-h-9 py-[20px]'>
                    {liveStreamUrl && (
                        <iframe
                        src={liveStreamUrl}
                        frameBorder="0"
                        allowFullScreen
                        className='w-full aspect-video'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    )}
                </div>
                <h1 className='text-[10px] text-Tblack text-opacity-50 py-[10px] text-justify'>Prophet Muhammad (PBUH) said, “The prayer in my Masjid (Masjid An-Nabawi) is better than one thousand (1000) prayers in any other masjid with the exception of Masjid Al-Haram, and a prayer in Masjid Al-Haram is better than one hundred thousand (100,000) prayers.”</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default PrayerSection
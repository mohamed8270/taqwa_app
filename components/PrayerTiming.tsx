"use client"

import React,{useState, useEffect} from 'react'
import {PrayerTimeFunction} from '../lib/actions/index';


interface PrayerTimingsData {
    Fajr: string;
    Zuhr: string;
    Asr: string;
    Magrib: string;
    Isha: string;
    Sunrise: string;
    Sunset: string;
    Englishdate: string;
    Hijridate: string;
    Holymonth: string;
  }

const PrayerTiming = () => {

    const [PrayerTimings, setPrayerTimings] = useState<PrayerTimingsData | null>(null);

    useEffect(() => {
      const PrayerTimings = async () => {
        try {
         const prayertimes = await PrayerTimeFunction();
         setPrayerTimings(prayertimes);

        } catch (error: any) {
            throw new Error(`Error While getting time data: ${error.message}`);   
        }
      }
    
      PrayerTimings();
    }, [])
    
    
  return (
    <>
        <div className='py-[20px] flex flex-col flex-wrap'>
            <div className='flex justify-between items-center'>
                <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>{PrayerTimings?.Englishdate}</h1>
                <h1 className='text-[12px] font-regular text-Tblack bg-Tgreen bg-opacity-10 rounded-md items-center text-center p-[5px]'>{PrayerTimings?.Hijridate} ({PrayerTimings?.Holymonth})</h1> 
            </div>
            <div className='flex justify-between items-center h-[50px] bg-Tyellow rounded-md my-[10px]'>
                <h1 className='text-Twhite text-[14px] font-semibold pl-[5px]'>Sun Rise</h1>
                <h1 className='text-[12px] font-semibold text-Twhite text-center p-[5px]'>{PrayerTimings?.Sunrise} AM</h1> 
            </div>
            <div className='h-[240px] bg-Twhite border-2 border-Tblack border-opacity-10 justify-between rounded-md'>
                <div className='flex justify-between items-center h-[48px]'>
                    <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>Fajr</h1>
                    <h1 className='text-[12px] font-regular text-Tblack text-center p-[5px]'>{PrayerTimings?.Fajr} AM</h1> 
                </div>
                <div className='flex justify-between items-center h-[48px]'>
                    <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>Zuhr</h1>
                    <h1 className='text-[12px] font-regular text-Tblack text-center p-[5px]'>{PrayerTimings?.Zuhr} PM</h1> 
                </div>
                <div className='flex justify-between items-center h-[48px]'>
                    <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>Asr</h1>
                    <h1 className='text-[12px] font-regular text-Tblack text-center p-[5px]'>{PrayerTimings?.Asr} PM</h1> 
                </div>
                <div className='flex justify-between items-center h-[48px]'>
                    <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>Mahgrib</h1>
                    <h1 className='text-[12px] font-regular text-Tblack text-center p-[5px]'>{PrayerTimings?.Magrib} PM</h1> 
                </div>
                <div className='flex justify-between items-center h-[48px]'>
                    <h1 className='text-Tblack text-[14px] font-semibold pl-[5px]'>Isha</h1>
                    <h1 className='text-[12px] font-regular text-Tblack text-center p-[5px]'>{PrayerTimings?.Isha} PM</h1> 
                </div>
            </div>
            <div className='flex justify-between items-center h-[50px] bg-Tyellow rounded-md my-[10px]'>
                <h1 className='text-Twhite text-[14px] font-semibold pl-[5px]'>Sun Set</h1>
                <h1 className='text-[12px] font-semibold text-Twhite text-center p-[5px]'>{PrayerTimings?.Sunset} PM</h1> 
            </div>
        </div>
    </>
  )
}

export default PrayerTiming
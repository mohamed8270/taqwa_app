'use client'

import React,{useState, useEffect} from 'react'
import HeroBanner from '../components/HeroBanner';
import ButtonRepo from '../components/ButtonRepo';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export async function fetchAddress(position: Position): Promise<string | null> {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
    const data = await response.json();
    const address = data.display_name;
    return address;
  } catch (error) {
    console.log(`Error fetching Address: ${error}`);
    return null;
  }
}

const HeroSection = () => {
  const router = useRouter();



  const [position, setPosition] = useState<Position | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGeolocationSuccess = (position: Position) => {
      setPosition(position);
      fetchAddress(position)
        .then((address) => setAddress(address))
        .catch((error) => setError(error.message));
    };

    const handleGeolocationError = (error: any) => {
      console.error('Geolocation error:', error);
      setError('Geolocation failed.');
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError('Geolocation is not supported.');
    }
  }, []);



  return (
    <>
    <section className='font-poppins sm:px-16 px-6 sm:py-2 py-[60px] mx-auto max-w-10xl'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <div className='h-[25px] w-[300px] flex flex-wrap items-center pl-[10px] bg-Tgreen bg-opacity-10 rounded-md'>
          {address && <p className='text-Tblack text-[12px] truncate'><span className='text-[12px]'>🧭</span> {address}</p>}
          </div>
          <h1 className='text-Tblack text-[50px] font-bold'>A reialable Islamic <br/><span className='text-Ired text-[50px] font-bold'>Center to Follow the</span> <br/><span className='text-Ired text-[50px] font-bold'>Qur'an & Sunnah</span></h1>
          <p className='text-Tblack text-opacity-50 text-[13px] font-regular mt-[10px]'>The Salat is the time when the meeting with the Allah and the,<br/>Acension [Mira'j] of the believer takes place!</p>
          <ButtonRepo type={`button`} click={() => router.push('/conversation')} txt={`Islamic AI`} styles={`h-[40px] w-[85px] text-[12px] bg-Tyellow text-Twhite  mt-[40px]`}/>
        </div>
        <HeroBanner/>
      </div>
    </section>
    </>
  )
}

export default HeroSection
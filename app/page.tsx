import Image from 'next/image'
import HeroSection from '../components/HeroSection';
import PrayerSection from '../components/PrayerSection';
import QuranSection from '../components/QuranSection';

export default function Home() {
  return (
   <div className='bg-Twhite'>
    <HeroSection/>
    <PrayerSection/>
    <QuranSection/>
   </div>
  )
}

"use client"

import React from 'react'
import Link from 'next/link'
import { navlinks } from "@/constants";
import ButtonRepo from '../components/ButtonRepo';
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter();
  return (
    <header className='w-full font-poppins bg-Twhite border-b border-gray-200'>
        <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/">
                <p className='text-Tblack font-semibold'>Taqwa <span className='text-Tgreen font-semibold'>App</span> </p>
            </Link>
            <ul className='hidden gap-12 lg:flex'>
                {navlinks.map((link)=>(
                <Link href={link.href} key={link.key} className='text-Tblack cursor-pointer items-center hover:bg-Tblack hover:bg-opacity-5 p-[10px] rounded-lg font-poppins text-[12px] font-regular hover:font-semibold'>{link.label}</Link>
                ))}
            </ul>
            <ButtonRepo type={`button`} click={() => router.push('/')} styles={`h-[40px] w-[85px] text-[12px] bg-Tgreen text-Twhite`} txt={`Sigin`}/>
        </nav>
    </header>
  )
}

export default NavBar
"use client"

import React,{useState, FormEvent} from 'react'
import ButtonRepo from '../../components/ButtonRepo'
import {ConversationRepo} from '../../lib/actions/index';


interface ChatResponse {
  response: string;
}

const ConversationPage = () => {

  const [UserChatInput, setUserChatInput] = useState('');
  const [OutputChatData, setOutputChatData] = useState<ChatResponse | string>('');

  const handleChatSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(UserChatInput === '') return alert('Please Input Something!');
      try {
          const output = await ConversationRepo(UserChatInput);
          // console.log(output);
          setOutputChatData(output);
          setUserChatInput('');
      } catch (error) {
          throw new Error(`Failed to connect with AI: ${error}`);   
      }
  }

  return (
    <>
      <div className='font-poppins bg-Twhite h-full mx-auto py-[40px]'>
        <div className='sm:px-16 px-6 justify-center items-center'>
          <h1 className='sm:text-[40px] text-[20px] text font-semibold text-Tblack text-center'>Islamic AI Chat (Beta Version)</h1>
          <div className='flex flex-wrap justify-center gap-6 py-[20px]'>
            <div className='h-[40px] w-[150px] text-Tblack text-[14px] font-medium items-center justify-center flex flex-wrap bg-Tyellow bg-opacity-10 rounded-md'>About</div>
            <div className='h-[40px] w-[150px] text-Tblack text-[14px] font-medium items-center justify-center flex flex-wrap bg-Tyellow bg-opacity-10 rounded-md'>Disclaimer</div>
            <div className='h-[40px] w-[150px] text-Tblack text-[14px] font-medium items-center justify-center flex flex-wrap bg-Tyellow bg-opacity-10 rounded-md'>More Information</div>
          </div>
          <div>
            <form onSubmit={handleChatSubmit} className='flex flex-wrap gap-4 justify-center items-center'>
              <input value={UserChatInput} onChange={(e) => setUserChatInput(e.target.value)} type="text" placeholder='Search Islam' className='h-[40px] sm:w-[1000px] w-[260px] text-[12px] font-medium text-Tblack pl-[10px] pr-[10px] border-2 border-gray-200 rounded-lg focus:border-Tgreen focus:outline-none' />
              <button type='submit' className='h-[40px] w-[85px] text-[12px] bg-Tgreen text-Twhite font-medium  rounded-lg'>Sent</button>
            </form>
            <div className='sm:px-[120px] pt-[20px]'>
              <div className='sm:h-[360px] h-[530px] w-full bg-Tgrey bg-opacity-0 p-6'>
                <p className='text-Tblack'>{typeof OutputChatData === 'object' ? OutputChatData.response : OutputChatData}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConversationPage
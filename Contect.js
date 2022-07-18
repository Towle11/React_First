import React from 'react'
import{BiPhone } from 'react-icons/bi'
import{MdEmail,MdLocationOff} from 'react-icons/md'
export default function Contect() {
  return (
    <div className=' flex flex-wrap sm:flex-nowrap mt-7 items-center space-x-5 justify-around p-10 sm:px-6 lg:px-8'>
        {/* Left */}
<div  className='space-y-7'>
    <h1 className='font-bold text-3xl text-gray-500'>Contect Info </h1>
    <p className='text-gray-700'>
        Let COntect Here Send Me messege  I will Answer u ASOP . <br/>Please Send Only Information
        I will Hepl U Tliye 
    </p>
    <div className='text-md flex text-gray-500 space-x-2 items-center'>
   <BiPhone/> __ +252617985254
</div>
 <div className='text-md flex text-gray-500 space-x-2 items-center'>
   <MdEmail/> __ Shakuromar44@hotmail.com
</div>
<div className='text-md flex text-gray-500 space-x-2 items-center'>
   <MdLocationOff/>__  Somalia Muqdisho,Warta
</div>
</div>

{/* right */}
<div className='sm:mt-20 md:mt-0'>
    <form className='md:w-full max-w-md space-y-6 sm:mt-4'>
        <input type="text" placeholder="Name " className='rounde-sm w-full border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo p-3'/>
        <input type="email" placeholder="Email " className='rounde-sm w-full border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo p-3'/>
        <textarea placeholder="messege" className='border-2 w-full text-xl '/>
        <button className='w-full p-2 text-lg rounded-md text-white bg-blue-800 focus:outline-none focus:ring-2'>Send messege</button>
    </form>

</div>
    
    </div>
  )
}

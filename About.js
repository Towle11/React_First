import React from 'react'
import me from '../Images/aboy.jpg'
import {FaJava ,FaReact,FaBootstrap} from 'react-icons/fa'
import {TbCSharp} from 'react-icons/tb'
import {DiJavascript1} from 'react-icons/di'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiPython ,SiTailwindcss} from 'react-icons/si'


function About() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-24'>
        {/* Left  */}  
        <div className='flex items-center flex-wrap relative justify-center h-max '>
        <div className=' w-3/4 h-3/4 rounded-3xl shadow-slate-300'>
         <img src={me} className='rounded-3xl w-full h-full object-cover'/>
            </div>
        </div>
        {/* right */}
        <div className=' p-5 md:p-0 md:text-left text-center '> 
            <h1 className='font-semibold text-3xl'>About me</h1>
            <p className='text-lg pt-5'>
            I Am Student Front-end , Desktop Apps And Web Developer <bt/> And Mobile App Developer My Experience Two Year Learning Languages Programming !
            I Am Student Front-end 
             </p> 
             {/* lan */}   
           <div>
               <h2 className='text-3xl mt-5 font-semibold  text-gray-500'> Languages  </h2>
                   <div className=' flex items-center flex-wrap w-full'>
                       <div className='m-3 flex items-center text-red-700 text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <FaJava/> 
                       </div>
                       <div className='m-3 flex items-center text-blue-700  text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <TbCSharp/> 
                       </div>
                       <div className='m-3 flex items-center text-yellow-300  text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <DiJavascript1/> 
                       </div>
                       <div className='m-3 flex items-center  text-gray-600 text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <AiOutlineConsoleSql/> 
                       </div>
                       <div className='m-3 flex items-center  text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <SiPython/> 
                       </div>
                       <div className='m-3 flex items-center text-cyan-300 text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <FaReact/>
                       </div> 
                       <div className='m-3 flex items-center  text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <SiTailwindcss/>
                       </div>
                       <div className='m-3 flex items-center text-blue-900 text-center rounded-lg bg-gray-400 w-20 justify-center h-7 text-lg' >
                     <FaBootstrap/>
                       </div>
                   </div>
                   
            
           </div>
              </div>
       
            
       
    </div>
  )
}

export default About
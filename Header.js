import React, { useState } from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {FcCloseUpMode} from 'react-icons/fc'
import { Link } from 'react-router-dom'


function Header() {
    const [open ,setOpen]=useState(false  )
  return (
      <div className='flex items-center justify-between'>
            {/*logo*/}
        <div className='text-2xl font-bold'>
            <Link to="Home">Shakurtowle</Link>
        </div> 


        {/*Lar Scren Nav */}
        <div className='hidden md:flex items-center gap-6  font-medium text-gray-600' > 
            <Link to="/Home">Home</Link>
             <Link to="/About">About</Link> 
      <div className='bg-blue-400 text-white hover:-translate-y-1 duration-100 px-3 py-1 rounded-md'>
             <Link to="/Contect">Contect</Link>
      </div>
      </div> 


           {/*small Scren Nav */}  
        <div className={`fixed top-0 z-50 bg-gray-50 w-40 h-screen  font-medium pt-20 p-9 text-gray-600 ${open ? "right-0" : "right-[-100%]"} md:hidden flex flex-col gap-5 duration-200`}>
           <Link to="/Home">Home</Link>
             <Link to="/About">About</Link> 
      <div className='bg-blue-400 text-white hover:-translate-y-1 duration-100 px-3 py-1 rounded-md w-20'>
             <Link to="/Contect">Contect</Link>
           </div>
           </div>


        {/*tooggle button Nav */}
            <div className="text-2xl md:hidden z-50" onClick={()=> setOpen(!open)}>
              {
                open ?( 
                <FcCloseUpMode className='h-7 cursor-pointer' />

                ):
                (

              <HiOutlineMenuAlt1 className='h-7 cursor-pointer' />

                )
              }
             
            </div>
      </div>
   
  
  )
}

export default Header
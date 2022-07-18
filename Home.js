import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Images/to.jpg'
import Tools from ".//Tools";
import {BsGithub, BsInstagram,BsFacebook} from 'react-icons/bs'


function Home() {
  return (
    <>

    <div className='flex  flex-col-reverse sm:flex-row mt-25 justify-between items-center '>
{/* Left */}

<div className='space-y-6 text-center sm:text-left '> 
    <h1 className='font-bold text-gray-800 text-3xl'> Shakur Omareyn</h1>
    <p className='text-gray-600  text-xl'>  
        I am Full-Stack Developer With Convert Into Function <br />Web Page 
        I desing Websites And Mobile Apps 

    </p>
    {/* Social link */}
    <div className=' flex space-x-4 text-center justify-center sm:justify-start'> 
    <h1 className='cursor-pointer text-xl transition-all hover:text-blue-600 '> 
    <Link to="//github.com/Towle11" ><BsGithub/></Link>
    </h1>
    <h1 className='cursor-pointer text-xl transition-all hover:text-blue-600 '> 
    <Link to="//github.com/Towle11" ><BsInstagram/></Link>
    </h1>
    <h1 className='cursor-pointer text-xl transition-all hover:text-blue-600 '> 
    <Link to="//github.com/Towle11" ><BsFacebook/></Link>
    </h1>
</div>


{/* Dowlond Resume Buttom */}
<button className='bg-blue-600 text-white p-2 px-2 py-2 hover:-translate-y-1 duration-100 rounded-lg'>
    <a href='resume.pdf'download={true}>download resume</a>
</button>
</div>



{/* Right */}
<div className='w-80 mb-10 sm:m-0'>
<img src={image} alt="" className='rounded-full object-cover mt-20 '/>  
</div>
    </div>
       <Tools/>{" "}
       </>
  );
}

export default Home
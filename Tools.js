import React from 'react'
import image from '../Images/github_PNG84.png'
import image1 from '../Images/gwindows_logo.png'
import image2 from '../Images/Linux-512.png'
import image3 from '../Images/logo-vscode.png'
import image4 from '../Images/sql-server-icon-png-4.png'
import image5 from '../Images/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png'
import image6 from '../Images/visualstudio-1.png'
import image7 from '../Images/intellij-idea-1-logo-png-transparent.png'



function Tools() {
  return (
  <div>
 <div className=' justify-center items-center  '>
          <h1 className='text-center text-3xl font-normal text-gray-600 mt-20'>
              My Lovely Tools..
          </h1>
      </div>


      <div className='px-4 grid grid-cols-8 md:grid-cols-4  md:w-750 mt-10 gap-3 w-full bg-white'>
        <img src={image} alt="" />
   <img src={image1} alt="" />
   <img src={image2} alt="" />
   <img src={image3} alt="" />  
    <img src={image4} alt="" />
   <img src={image5} alt="" />
   <img src={image6} alt="" />
   <img src={image7} alt="" />
      </div>

      </div>

     
  )
}

export default Tools
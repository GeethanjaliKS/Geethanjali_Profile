import React from 'react'
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';
import Certificate from './Certificate';
import { FaDev } from "react-icons/fa";
function Home() {
  
   
    const handleGithubClick = () => {
        window.open('http://www.github.com/GeethanjaliKS', '_blank');
      }
    
      const handleLinkedClick = () => {
        window.open('https://www.linkedin.com/in/geethanjali-ks-461880255/', '_blank');
      }
      const handleDevClick = () => {
        window.open('https://dev.to/geethanjaliks/', '_blank');
      }
    
  return (
<>
    <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center '>
     
    <h1 class="md:text-6xl sm:text-4xl font-bold mt-8 font-merienda ">Hi, I am Geethanjali</h1>

      {/* <p className="text-xl mt-4 text-center">Empowering minds, shaping futures</p> */}
      <div className="mt-8 flex space-x-4">
               {/* GitHub icon */}
        <BsGithub
          className="cursor-pointer"
          size={40}
          color="white"
          onClick={handleGithubClick}
        />
        {/* LinkedIn icon */}
     <IoLogoLinkedin
          className="cursor-pointer"
          size={40}
          color="white"
          onClick={handleLinkedClick}
        />
        <FaDev
        
        className="cursor-pointer"
        size={40}
        color="white"
        onClick={handleDevClick}
        />
      
      </div> 

    </div>
<div>
<About/>
{/* <Resume/> */}
<Certificate/>
<Project/>
<Contact/>
</div>
</>
  )
}

export default Home
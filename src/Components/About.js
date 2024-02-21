import React from 'react'
 import about from '../Image/About_Me.jpg'


function About() {
  return (
<div className="bg-gray-300 min-h-screen">
  <div className="max-w-5xl mx-auto md:grid grid-cols-2 gap-4 items-center md:pt-8 sm:pb-[10%]">
    {/* Image Column */}
    <div className="md:col-span-1 flex justify-center">
      <img className="w-80 md:w-80 h-auto pt-[15%] " src={about} alt="Profile" />
    </div>

    {/* Text Content Column */}
    <div className="md:col-span-1 mt-8 pl-8">
      <h2 className="text-4xl font-cinzel font-semibold text-black mb-2 sm:pt-8">About Me</h2>
      <p className="text-bold font-kaushan"> 
        My name is Geethanjali, and I currently work as a lecturer. I have a keen interest in full-stack web development, and I've had the opportunity to explore this field during my internship. <br/>
        In terms of technical skills, I am proficient in several programming languages and technologies including <strong>MERN stack HTML5, CSS, Tailwind CSS, Postman, DBMS, NoSQL, Python, and PostgreSQL</strong>
      </p>
      <h3 className="text-2xl font-cinzel font-semibold text-black-800 mb-2">Education</h3>
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-black">Bachelor of Computer Science</h4>
        <p className="text-bold font-kaushan">Vivekananda Degree College of Art, Science and Commerce, 2021</p>
      </div>
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-black">Master of Computer Science</h4>
        <p className="text-bold font-kaushan">Vivekananda Degree College of Engineering and Technology, 2023</p>
      </div>
      <h3 className="text-2xl font-cinzel font-semibold text-black-800 mb-2">Hands On Experience</h3>
      <p className="text-bold font-kaushan">I completed my internship in full-stack web development at Kakunje Software Company in Mangalore.</p>
    </div>
  </div>
</div>


     

      



  )
}

export default About
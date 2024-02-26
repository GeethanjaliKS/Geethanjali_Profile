import React from 'react'
import Skill from './Skill'
import Experience from './Experience'


function Resume() {
  return (
    <div>
    <div className='bg-black min-h-screen p-8 flex justify-center items-center'>
    <section id="resume" className="w-full py-20  border-b-black snipcss-sIULK">
  <div className="flex justify-center items-center text-center">
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        18+ YEARS OF ACADEMIC AND WORK EXPERIENCE
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        My Resume
      </h1>
    </div>
  </div>
  {/* <div> */}
    {/* <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
      {/* <li className="border-designColor rounded-lg resumeLi">
        Education
      </li> */}
      {/* <li className="border-transparent resumeLi">
        Professional Skills
      </li> */}
      {/* <li className="border-transparent resumeLi">
        Experience
      </li> */}
      {/* <li className="border-transparent resumeLi">
        Achievements
      </li> */}
    {/* </ul> */}
  {/* </div> */}
  {/* <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 style-PrRDz" id="style-PrRDz"> */}
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">
          2005 - 2023
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Educational Qualification
        </h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <div className="w-full h-1/3 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">
              </span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white duration-300 ">
                  Master of Computer Application
                </h3>
                <p className="text-sm mt-2 text-gray-400 text-white duration-300">
                  Vivekananda College of Engineering and Technology (2021 - 2023)
                </p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer">
                  <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                    8.0 CGP
                  </p>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-white duration-300">
              Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, etc.
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">
              </span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white duration-300">
                  Bachelor of Computer Application
                </h3>
                <p className="text-sm mt-2 text-white duration-300">
                  Vivekananda College, Puttur (2018 - 2021)
                </p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer">
                  <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium ">
                    85%
                  </p>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-white duration-300">
              Studied programming in c,c++ and java 
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">
              </span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white duration-300">
                  Pre-University College
                </h3>
                <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                  Vittal PU College (2016 - 2018)
                </p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer">
                  <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium ">
                    83% 
                  </p>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-white duration-300">
              Studied Computer Science,Economics,Accounts,Bussiness Studies.
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">
              </span>
            </span>
          </div>
          <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white duration-300">
                   Secondary School Education
                </h3>
                <p className="text-sm mt-2 text-white duration-300">
                  Vittal HighSchool,Vitla (2014 - 2018)
                </p>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer">
                  <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                    82% 
                  </p>
                </a>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-white duration-300">
              Studied in this school from primary to 10th std. SSC Subjects: English, Hindi, Kannada, Maths, Science, Social Sciences.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
    
    </div>
  {/* </div> */}
</section>

    </div>
    <Skill/>
    <Experience/>
    </div>
  
  )
}

export default Resume
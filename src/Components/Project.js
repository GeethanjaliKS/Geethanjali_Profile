import React from 'react'
import excess from '../Image/ExcessFood.jpg'
import expense from '../Image/ExpenseTracking.jpg'
import object from '../Image/ObjectFollowing.jpeg'
import navathan from '../Image/Navathan.webp'
import todo from '../Image/TodoList.png'

function Project() {
    
  return (
    <div className="bg-black min-h-screen pt-[5%] border-b border-white">
   <h1 className="text-4xl md:text-5xl text-white font-bold capitalize text-center">
        Project
      </h1>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      <div className="rounded overflow-hidden shadow-2xl shadow-gray-600 bg-black border-1 border-rose-600 ">
        <img className="w-full h-auto " src={excess} alt=" " />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">EXCESS FOOD DISTRIBUTION</div>
          <p className="text-white text-base">
            “Excess Food Distribution” is a web-based system designed to reduce food waste management that allows users to denote and share their food using HTML/CSS, PHP, MySQL.
          </p>
        </div>
        {/* <div className="px-6 pt-10 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MYSQL</span>
        </div> */}
      </div>
    <div className="rounded overflow-hidden shadow-2xl shadow-gray-600 bg-black border-1 border-green-600">
      <img class="w-full" src={expense} alt=""/>
      <div class="px-6 py-4 ">
        <div class="font-bold text-xl mb-2 text-white">EXPENSE TRACKING USING PYTHON</div>
        <p class="text-white text-base ">
        This project analysis user’s expense dataset and using this project, user can make better
         financial decisions. Using the dataset yearly, monthly and daily expense is displayed.
          User can also check for the particular expense. Using linear regression next 3 months 
          expense is predicted by taking past expenses.  
        </p>
      </div>
      {/* <div class="px-6  pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#python</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#matplotlib</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#prediction</span>
      </div> */}
    </div>
    <div class="rounded overflow-hidden shadow-2xl shadow-gray-600 bg-black border-1 border-white">
      <img class="w-full h-" src={object} alt="River"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-white">OBJECT FOLLOWING ROBOT</div>
        <p class="text-white text-base">
        This is IoT based project where a robot follows a object or human continuously. Ultrasonic sensor is used to calculate the distance between the object and robot. IR sensors are used to know which direction the object rotates. Also, we have motor
         driver shield and motors to move the robot accordingly. And most importantly 
         I have used Arduino uno as the brain of my robot.  
        </p>
      </div>
      {/* <div class="px-6 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IOT</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Arduino</span>
        {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span> */}
      {/* </div>  */}
    </div>

   
    <div class="rounded overflow-hidden shadow-2xl shadow-gray-600 bg-blackhite border-1 border-sky-600 ">
      <img class="w-full h-50" src={navathan} alt=""/>
      <div class="px-6 py-4 ">
        <div class="font-bold text-xl mb-2 text-white">NAVATHAN 2023</div>
        <p class="text-white text-base">
        This is the invitation card for our fresher’s day 
        program that is deployed in netlify. Technologies used in this project are react JS and bootstrap. Animations are added in this project using motion-framer.   
        </p>
      </div>
      {/* <div class="px-6 ">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React JS</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Framer Motion</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BootStrap</span>
      </div> */}
    </div>
    <div class="rounded overflow-hidden shadow-2xl shadow-gray-600 bg-black border-1 border-yellow-600 ">
      <img class="w-full h-50" src={todo} alt="River"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-white">TODO APPLICATION</div>
        <p class="text-white text-base">
        This project user add the text and also user can delete and edit the text that is deployed in netlify. Technologies used in this project are react JS and Tailwind CSS.  
Animations are added in this project using motion-framer.


        </p>
      </div>
      {/* <div class="px-6 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React JS</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind CSS</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Framer-Motion</span>
      </div> */}
    </div>
    
  </div>
</div>
  )
}

export default Project
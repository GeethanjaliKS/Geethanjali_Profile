import {React} from 'react'
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';
import Certificate from './Certificate';
import { FaDev } from "react-icons/fa";
import { useEffect, useState } from "react";
import '../Home.css';
function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
 

  useEffect(() => {
    const messages = [
        "I'm a passionated by Software Developer",
        "And currently working as a Lecturer"
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let timer;

    const addText = () => {
        if (charIndex < messages[messageIndex].length) {
            currentText += messages[messageIndex].charAt(charIndex);
            setText(currentText);
            charIndex++;
            timer = setTimeout(addText, 100); // Adjust the speed of typing
        } else {
            // Switch to the next message after a delay of 1000ms (1 second)
            setTimeout(() => {
                // Reset charIndex and currentText for the next message
                charIndex = 0;
                currentText = '';
                // Increment messageIndex or reset it if it exceeds the number of messages
                messageIndex = (messageIndex + 1) % messages.length;
                // Clear previous message after a delay of 500ms (0.5 second)
                setTimeout(() => {
                    setText('');
                    // Restart typing
                    addText();
                }, 500);
            }, 1000);
        }
    };

    addText();

    return () => clearTimeout(timer);
}, []);


  const handleGithubClick = () => {
      window.open('http://www.github.com/GeethanjaliKS', '_blank');
  };

  const handleLinkedClick = () => {
      window.open('https://www.linkedin.com/in/geethanjali-ks-461880255/', '_blank');
  };

  const handleDevClick = () => {
      window.open('https://dev.to/geethanjaliks/', '_blank');
  };

  return (
      <>
          <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center sm:pb-[5%] sm:pl-[2%] border-b border-white'>
          <div className="text-center">
    <h1 className="md:text-6xl sm:text-4xl font-bold mt-8 font-merienda">Hi, I am Geethanjali</h1>
    <div className="text-white mt-4 text-left sm:text-center">
      <p className="typing-text font-kaushan text-designColor">{text}</p>
      {showCursor && <span className="cursor">|</span>}
    </div>
  </div>
              <div className="mt-8 flex space-x-4">
                  <BsGithub
                      className="cursor-pointer"
                      size={40}
                      color="white"
                      onClick={handleGithubClick}
                  />
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
{/* <About/> */}
<Resume/>
<Certificate/>
<Project/>
<Contact/>
</div>
</>
  )
}

export default Home
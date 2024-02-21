import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const handleLinkedClick = () => {
  // Replace this path with the correct path to your PDF file
  fetch("src/Resume/RESUME.pdf").then((response) => {
    response.blob().then((blob) => {
     
        // Creating new object of PDF file
        const fileURL =
            window.URL.createObjectURL(blob);
             
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RESUME.pdf";
        alink.click();
      });
    });
};
    



function Resume() {
  const [changeColor, setChangeColor] = useState(false);
  useEffect(() => {
    // Change color every 3 seconds
    const interval = setInterval(() => {
      setChangeColor(prevState => !prevState);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      
      <div className='grid place-items-center'>
        <BsFillArrowDownCircleFill color="white" size={50} className='animate-bounce' />
        <Button variant="outline-primary" size="sm" className="mt-2" onClick={handleLinkedClick}>Download</Button>
        <div className="">
        <p className={`text-2xl mt-6 font-cinzel font-semibold  ${changeColor ? 'text-blue-300' : 'text-white'}`}>Download the resume here !!!......</p>
      </div>
      </div>
      
    </div>
  );
}

export default Resume;

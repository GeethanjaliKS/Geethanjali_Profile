import React from 'react'

function Contact() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-[5%] pb-[5%]">
    <div className="max-w-4xl mx-auto bg-black p-[8%] pl-[8%] pr-[8%] rounded-lg shadow-lg grid grid-cols-2 gap-8  border-2 border-sky-600">
      {/* Left column - Get in touch */}
      <div className="col-span-1">
        <h2 className="text-2xl font-cinzel font-semibold text-white   mb-4 ">Get in touch</h2>
        <div>
          <p className='text-white'>Email: geethanjaks001@gmail.com</p>
          <p className='text-white'>Contact Number: 7996201371</p>
        </div>
      </div>
      {/* Right column - Contact form */}
      <div className="col-span-1">
        <h2 className="text-2xl font-cinzel font-semibold mb-4 text-white ">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-white">First Name</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-white">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
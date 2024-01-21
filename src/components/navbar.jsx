import React from 'react'
// import background from './background-image.png'
// import logoImage from './ecoscan-high-resolution-logo-transparent.png'
import logoImage from './logo-white.png'

const Navbar = () => {
  return (
    <div className="p-4 flex justify-center">
    <img src={logoImage} alt="Logo" className='logo-img h-20 mr-4' />

    <div className="flex">
      <span className="text-white">About</span>
      <span className="text-white">Home</span>
      <span className="text-white ml-auto">Contact</span>
    </div>

  </div>
  )
}

export default Navbar
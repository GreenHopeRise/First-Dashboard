import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-100 fixed top-0 h-16 left-64 right-0 border-b border-gray-300 shadow flex items-center px-6 '>
      <h1 className='font-bold text-2xl flex-1'>Admin panale</h1>
      <div className='flex gap-4'>
        <button className='px-3 rounded-md text-white bg-blue-500 py-1'>LogIn</button>
        <button className='px-3 rounded-md text-white bg-blue-500 py-1'>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar
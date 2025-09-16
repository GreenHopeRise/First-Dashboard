import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-gray-900 w-64 h-screen text-gray-100 p-4 fixed top-0 left-0 shadow-lg'>
        <div className='px-6 py-4 border-b border-gray-700'>
            <h1 className='text-2xl font-bold'>Admin panel</h1>
        </div>
        <nav className='mt-6 flex flex-col gap-2 px-4'>
            <a href="#" className='block py-2 px-3 rounded hover:bg-gray-700'>Dashboard</a>
            <a href="#" className='block py-2 px-3 rounded hover:bg-gray-700'>Users</a>
            <a href="#" className='block py-2 px-3 rounded hover:bg-gray-700'>Products</a>
            <a href="#" className='block py-2 px-3 rounded hover:bg-gray-700'>Setting</a>
        </nav>
    </div>
  )
}

export default Sidebar
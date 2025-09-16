import React, { useState } from 'react'
import { users } from '../data/usersData'

const Users = () => {
  const [state, setState] = useState(users)
  const [sortAsc, setSortAsc] = useState(true)

  const sortByName = ()=>{
    const sorted = [...state].sort((a,b)=>
     sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    )
    setState(sorted)
    setSortAsc(!sortAsc)
  }
  return (
    <div className="overflow-x-auto p-4">
      <h2 className='font-bold text-2xl mb-4'>Users</h2>
      <table className='min-w-full bg-white border'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='px-4 py-2 border'>Id</th>
            <th className='px-4 py-2 border cursor-pointer' onClick={sortByName}>Name {sortAsc? '↑' : '↓'}</th>
            <th className='px-4 py-2 border'>Email</th>
            <th className='px-4 py-2 border'>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((user)=>(
              <tr key={user.id} className='text-center'>
                <td className='px-4 py-2 border'>{user.id}</td>
                <td className='px-4 py-2 border'>{user.name}</td>
                <td className='px-4 py-2 border'>{user.email}</td>
                <td className='px-4 py-2 border'>{user.role}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Job Tracker 🚀</h1>
      <button className="bg-blue-600 px-3 py-1 rounded">Toggle Theme</button>
    </div>
  )
}

export default Navbar

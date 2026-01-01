import React from 'react'

const NewTask = () => {
  return (
    <div>
      <div className="h-full w-[300px] p-5 flex-shrink-0 bg-blue-400 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
            High
          </h3>
          <h4 className="text-xs text-gray-700">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold text-gray-900">
          Make a great project
        </h2>
        <p className="text-sm mt-2 text-gray-800 leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, recusandae!
        </p>
        <div className="mt-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm">
            Accept Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
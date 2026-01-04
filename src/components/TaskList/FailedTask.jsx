import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className="h-full w-[300px] p-5 flex-shrink-0 bg-yellow-400 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
           {data.category}
          </h3>
          <h4 className="text-xs text-gray-700">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold text-gray-900">
          {data.title}
        </h2>
        <p className="text-sm mt-2 text-gray-800 leading-snug">
         {data.description}
        </p>
        <div className="mt-3">
          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
            Failed
          </button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask

import React from "react";

const AcceptTask = () => {
  return (
    <div>
      <div className="h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl shadow-md">
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
        <div className="flex justify-between mt-4 gap-2">
          <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm">
            Mark as Completed
          </button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition text-sm">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
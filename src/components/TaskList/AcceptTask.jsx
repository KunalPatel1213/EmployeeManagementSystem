import React from "react";

const AcceptTask = () => {
  return (
    <div>
      <div className="h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a greate project</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, recusandae!
        </p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-500 py-1 px-2 text-sm">Mark is Completed</button>
            <button className="bg-red-500 py-1 px-2 text-sm">Mark is failed</button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;

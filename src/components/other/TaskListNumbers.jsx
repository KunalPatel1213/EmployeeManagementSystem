import React from 'react'

const TaskListNumbers = ({data}) => {
  const newTaskCount = data.tasks.reduce((acc, task) => acc + task.newTask, 0)
  const completedCount = data.tasks.reduce((acc, task) => acc + task.completed, 0)
  const activeCount = data.tasks.reduce((acc, task) => acc + task.active, 0)
  const failedCount = data.tasks.reduce((acc, task) => acc + task.failed, 0)

  return (
    <div className='flex mt-10 justify-between gap-5 w-screen'>
      <div className='rounded-xl w-[40%] p-10 py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{newTaskCount}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[40%] p-10 py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{completedCount}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[40%] p-10 py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{activeCount}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-[40%] p-10 py-6 px-7 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{failedCount}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
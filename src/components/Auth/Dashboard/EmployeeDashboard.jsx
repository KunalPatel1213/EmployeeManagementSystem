import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import Tasklist from '../../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
        <div className='p-8 bg-[#1C1C1C] h-screen'>
          
            <Header data = {data} />
            <TaskListNumbers data={data}/>
            <Tasklist  data={data}/>
        </div>
 
  )
}

export default EmployeeDashboard

import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const [userName, setUsername] = useState('')

  useEffect(() => {
    if(!props.data){
      setUsername('Admin')
    } else {
      setUsername(props.data.firstname)
    }
  }, [props.data]) 

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between py-5 px-5'>
      <h1 className='text-2xl font-medium '>
        Hello <br/>
        <span className='text-3xl font-semibold'>{userName} ❤️</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-medium px-3 py-2 rounded-sm cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header

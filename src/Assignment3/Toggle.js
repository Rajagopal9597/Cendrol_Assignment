import React from 'react'
import {useState} from 'react'
import './style.css'
const Toggle = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <div className='container'>
      <button
       style={{background: `${toggle ? 'red' : 'blue'}`}}
       onClick={()=>{setToggle(!toggle)}}
       >click to Change color</button>
    </div>
  )
}

export default Toggle

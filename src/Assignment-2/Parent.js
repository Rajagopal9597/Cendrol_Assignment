import React from 'react'
import Child from './Child'
import {useState} from 'react'
import './style.css'
const Parent = () => {
   const cendol = 2;
   const [value,setValue] = useState(cendol)
    
  return (
    <div className='container'>
      <h1>{value}</h1>
      <Child sendvalue={cendol} setfunc={setValue} />
    </div>
  )
}

export default Parent

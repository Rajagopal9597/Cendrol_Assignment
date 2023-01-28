import React from 'react'
import {useState} from 'react'
import './style.css'
const Cendrol = () => {
    const [counter,setCounter] = useState(0);
    const [color,setcolor] = useState(true);

    
    
  return (
    <div className='maincontainer'>
       <div className='container'>
         <div className='circle' 
         style={{background: `${color ? 'yellow' : ' rgb(20, 151, 114)'}`}}
         onClick={(e)=>setCounter(counter+1)}>
            <h1>{counter}</h1>
            <h4>click to increase counter</h4>
         </div>

       </div>
      <button 
      
      onClick={()=>{setcolor(!color)}}
      >Change color</button>
    </div>
  )
}

export default Cendrol

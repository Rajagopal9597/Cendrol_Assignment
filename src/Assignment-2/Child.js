const Child = (props)=> {
  const cendol = props.sendvalue + 10;
  
  return (
      <div>
          <button onClick={()=> {props.setfunc(cendol)}}>Send Data to parent</button>
      </div>
  )
}
export default Child;


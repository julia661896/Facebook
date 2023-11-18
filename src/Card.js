import React from 'react'
import { useState ,useEffect} from 'react'
const Card = () => {
  
  const[number,setNumber]=useState(0)
  const[data,setData]=useState("")
  const increaseNumber=()=>{

return setNumber((prev)=>{return prev+1})



  }
  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json()).then((resp)=>setData(resp))},[])
  return (
<>
<div>{data}</div>
    <button onClick={increaseNumber}> {number}</button>
    </>

  )
}

export default Card
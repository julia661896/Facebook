import React from 'react'
import Button from './Button'
import Card from './Card'
import { useState,useEffect} from 'react'
import { useCallback } from "react"
import axios from "axios";
const Api = () => {

 console.log("parent")
  const [localNumber,setLocalNumber]=useState(0);
  const [childNumber,setChildNumber]=useState(0);
  const usedcallback=useCallback(changechildnumber,[])
  function incrementLocal(){
setLocalNumber(value=>value+1)


  };
  function changechildnumber(){
setChildNumber(value=>value+1)
  };

useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function (data) {
  // handle success
  console.log(data);
})
.catch(function (error) {
  // handle error
  console.log(error)
})},[])


  return (


<> 

<div>local value: {localNumber}</div>

<div>
  

  </div>
<button onClick={incrementLocal}>Click to incremet local</button>
<Button changechild={usedcallback} childnumber={childNumber} > kunkjkhk ijjli jlijk </Button>
<Card></Card>

</>



  )
}

export default Api
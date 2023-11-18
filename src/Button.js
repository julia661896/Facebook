import React from 'react'
import { memo } from 'react'
const Button =(props) => {
  console.log("child")
  return (<>
    <div>{props.childnumber}</div>
    <div><button onClick={props.changechild}>Change child value</button></div></>
  )
}
export default memo(Button)
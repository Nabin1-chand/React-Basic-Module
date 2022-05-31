import React, { useState } from 'react'
const Basic = (props) => {
  const [data,setData]=useState("Nabin");

    const name = props.name;
    const email = props.email;

  return (
    <>
       <h1>My name is {name}</h1>
       <h2>My Email id is {email}</h2>
       <br/>
       <h1>Hooks in React {data}</h1>
      <button onClick={()=>setData("Peter")}>Update State</button>
    </>
  
  )
}

export default Basic
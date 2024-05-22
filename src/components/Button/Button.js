import React, { useState } from 'react'

const Button = (props) => {
    const [active, setActive] = useState(true)

  return (
    <button 
    onClick={()=>{
        setActive(!active)
    }} 
    style={active ? {backgroundColor: "red"} : {backgroundColor: "blue"}}
    >
        {props.children}
    </button>
  )
}

export default Button
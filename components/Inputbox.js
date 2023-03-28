import React from 'react'

const Inputbox = ({ label, setAttribute}) => {
  return (
    <div>
      <label>{label}</label>
 <input onChange={(e)=>setAttribute(e.target.value)} className=" bg-red-400"/>
    </div>
  )
}

export default Inputbox 
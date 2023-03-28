import React from 'react'

const Inputbox = ({ label, setAttribute}) => {
  return (
    <div className="m-3">
      <label className="mr-2">{label}</label>
 <input onChange={(e)=>setAttribute(e.target.value)} className="p-2 border-2"/>
    </div>
  )
}

export default Inputbox 
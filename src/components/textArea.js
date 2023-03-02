import React from 'react'
import "./text-style.css"




const TextArea = ({data}) => {
  return (
    <div className='text-input'>
       <textarea name="" id="textfield" cols="65" rows="10" value={data.template} onChange={(e) => { data({ template: e.target.value}) }}>
          
       </textarea>
    </div>
  )
}

export default TextArea
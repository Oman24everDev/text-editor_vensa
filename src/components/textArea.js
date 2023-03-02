import React from 'react'
import "./text-style.css"

const TextArea = ({data}) => {
  return (
    <div className='text-input'>
       <textarea name="" id="" cols="65" rows="10" value={data.template}>
       </textarea>
    </div>
  )
}

export default TextArea
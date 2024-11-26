import React, { useState } from 'react'

const BasicFunctions = () => {
  const [title, setTitle] = useState('')
  const [isError, setError] = useState(false)
  const handleCLick= () => {
    setError(!isError)
    setTitle("Whoa something cool here")
  }
  return (
    <div>
      {
        title?"Whoa something cool here":"OOps what's wrong please"
      }
      <button className='btn' onClick={handleCLick}> click me </button>
      {isError? <h4>OOps something when wrong please  contact the admin</h4>: title}
    </div>
  )
}

export default BasicFunctions

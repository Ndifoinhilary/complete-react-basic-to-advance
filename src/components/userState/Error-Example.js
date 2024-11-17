import React from 'react'

const ErrorExample = () => {
  let title = "Example"
  const handleClick = () => {

  } 
  return (
    <div>
      <p>{title}</p>
      <button className='btn' onClick={handleClick}>Click Me</button> 
     </div>
  )
}

export default ErrorExample

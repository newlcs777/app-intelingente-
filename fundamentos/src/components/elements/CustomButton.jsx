import React from 'react'

const CustomButton = (onClick) => {
  return (
    <div className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" >
      <button onClick={onClick}>Calcular</button>
    </div>
  )
}

export default CustomButton

import React from 'react'
import { useColors } from '../hooks/useColors'

const ColorPicker = ({ color, colorList, handleChangeColor, handleSubmitSaveColor }) => {
  
  return (
  <>  
   <form  onSubmit={handleSubmitSaveColor}>
    <input 
    type="color" 
    className='form-control' 
    
    style={{ 
      width: "500px",
      height: "300px",
      cursor: "pointer"
    }}
    title='Seleccione un color...'
    value= { color }
    onChange={ handleChangeColor }
      />
      
    <div className='text-end'>
      <h2 className='mt-3 fw-bolder'>
        <div style={{ 
          width: "30px",
          height: "30px",
          backgroundColor: color,
          display: "inline-block",
          margin: "0 1rem",
          borderRadius: "100%"
        }}
        ></div>
       {color}
      </h2>
      <button type="submit" className='btn btn-success '>Added Color</button>
    </div>
   </form>
   {/* <pre>{colorList}</pre> */}
   </>
  )
}

export default ColorPicker
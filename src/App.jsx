import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor,setBackgroundColor]=useState('#ffffff');
  //setbgcolor fn sets state bgcolor to color and then that bg is style of main div see below

  const colors = [
    "#FF5733", // Bright Red-Orange
    "#33FF57", // Lime Green
    "#3357FF", // Bright Blue
    "#FF33A1", // Hot Pink
    "#A133FF", // Purple
    "#FFC300", // Yellow
    "#DAF7A6", // Light Green
    
  ];
  

  function handleColorChange(color){
    setBackgroundColor(color);
  };

  return (
    
      <div style={{backgroundColor}} className='App'>
        <h1>Color Picker</h1>
        <div className='color-palette'>
          {colors.map((color,index)=>(
            <div key={index}
                  className='color-box'
                  style={{backgroundColor:color}}
                  onClick={()=>handleColorChange(color)}
            ></div>
          ))}
        </div>

        <div className='custom-color-picker'>
          <input type="color" 
                value={backgroundColor}
                onChange={(e)=>handleColorChange(e.target.value)}/> 
        </div>
      </div>
      
  )
}

export default App

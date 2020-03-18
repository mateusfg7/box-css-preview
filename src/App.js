import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    style: 'solid',
    color: '#000',
    size: '0px',
    radius: '0',
  })

  function updateBorderStyle(tag, value) {
    tag.style.borderStyle = value
  }
  function updateBorderColor(tag, value) {
    tag.style.borderColor = value
  }
  function updateBorderSize(tag, value) {
    tag.style.borderWidth = value + 'px'
  }
  function updateBorderRadius(tag, value) {
    tag.style.borderRadius = value + 'px'
  }

  return (
    <div className="App">
      <div id="main-box"></div>

      <div className="costumize-area">
        Style <input name="style" type="text" value={state.style} onChange={(event)=>{
          setState({ ...state, style: event.target.value })
          updateBorderStyle(document.getElementById('main-box'), event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Color <input name="color" type="color" onChange={(event)=>{
          setState({ ...state, color: event.target.value })
          updateBorderColor(document.getElementById('main-box'), event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Size <input name="size" type="number" onChange={(event)=>{
          setState({ ...state, size: event.target.value + 'px' })
          updateBorderSize(document.getElementById('main-box'), event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Radius <input name="radius" type="range" value={state.radius} step="1" min="0" max="150" onChange={(event)=>{
          setState({ ...state, radius: event.target.value })
          updateBorderRadius(document.getElementById('main-box'), event.target.value)
        }}/>
      </div>
      <br/>
      
      <textarea id="text-to-copy" type="text" value={`border: ${state.size} ${state.style} ${state.color};\nborder-radius: ${state.radius}px;`}/>
      <br/>
      <button onClick={() => {
        const areaToCopy = document.getElementById("text-to-copy")
        areaToCopy.select()
        document.execCommand('copy')
      }}>Copy css to clipboard</button>

    </div>
  );
}

export default App;

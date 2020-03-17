import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    style: '',
    color: '',
    size: '0px',
    radius: '0',
  })

  function updateBorderStyle(value) {
    const mainBox = document.getElementById('main-box')
    mainBox.style.borderStyle = value
  }
  function updateBorderColor(value) {
    const mainBox = document.getElementById('main-box')
    mainBox.style.borderColor = value
  }
  function updateBorderSize(value) {
    const mainBox = document.getElementById('main-box')
    mainBox.style.borderWidth = value + 'px'
  }
  function updateBorderRadius(value) {
    const mainBox = document.getElementById('main-box')
    mainBox.style.borderRadius = value + 'px'
  }

  return (
    <div className="App">
      <div id="main-box"></div>

      <div className="costumize-area">
        Style <input name="style" type="text" value={state.style} onChange={(event)=>{
          setState({ style: event.target.value })
          updateBorderStyle(event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Color <input name="color" type="color" onChange={(event)=>{
          setState({ color: event.target.value })
          updateBorderColor(event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Size <input name="size" type="number" onChange={(event)=>{
          setState({ size: event.target.value + 'px' })
          updateBorderSize(event.target.value)
        }}/>
      </div>
      <br/>
      <div className="costumize-area">
        Radius <input name="radius" type="range" value={state.radius} step="1" min="0" max="52" onChange={(event)=>{
          setState({ radius: event.target.value })
          updateBorderRadius(event.target.value)
        }}/>
      </div>
      <br/>

    </div>
  );
}

export default App;

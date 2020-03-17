import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    style: '',
    color: '',
    size: '0px',
    radius: '0px',
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
  function updateBorderRadius(value) {}

  return (
    <div className="App">
      <div id="main-box"></div>

      <span className="costumize-area">
        Style <input name="style" type="text" value={state.style} onChange={(event)=>{
          setState({ style: event.target.value })
          updateBorderStyle(event.target.value)
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Color <input name="color" type="color" onChange={(event)=>{
          setState({ color: event.target.value })
          updateBorderColor(event.target.value)
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Size <input name="size" type="number" onChange={(event)=>{
          setState({ size: event.target.value + 'px' })
          updateBorderSize(event.target.value)
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Radius <input name="radius" type="number" onChange={(event)=>{
          setState({ radius: event.target.value })
          updateBorderRadius(event.target.value)
        }}/>
      </span>
      <br/>

    </div>
  );
}

export default App;

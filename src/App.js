import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    style: '',
    color: '',
    size: '0px',
    radius: '0px',
  })

  function log() {
    state.map(value => {
      console.log(value)
    })
  }

  return (
    <div className="App">
      <div id="main-box"></div>

      <span class="costumize-area">
        Style <input name="style" type="text" value={state.style} onChange={(event)=>{
          setState({ style: event.target.value })
          log() // LOG
        }}/>
      </span>
      <br/>
      <span class="costumize-area">
        Color <input name="color" type="color" onChange={(event)=>{
          setState({ color: event.target.value })
          log() // LOG
        }}/>
      </span>
      <br/>
      <span class="costumize-area">
        Size <input name="size" type="number" onChange={(event)=>{
          setState({ size: event.target.value })
          log() // LOG
        }}/>
      </span>
      <br/>
      <span class="costumize-area">
        Radius <input name="radius" type="number" onChange={(event)=>{
          setState({ radius: event.target.value })
          log() // LOG
        }}/>
      </span>
      <br/>

    </div>
  );
}

export default App;

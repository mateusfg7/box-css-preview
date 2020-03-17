import React, { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    style: '',
    color: '',
    size: '0px',
    radius: '0px',
  })

  return (
    <div className="App">
      <div id="main-box"></div>

      <span className="costumize-area">
        Style <input name="style" type="text" value={state.style} onChange={(event)=>{
          setState({ style: event.target.value })
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Color <input name="color" type="color" onChange={(event)=>{
          setState({ color: event.target.value })
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Size <input name="size" type="number" onChange={(event)=>{
          setState({ size: event.target.value })
        }}/>
      </span>
      <br/>
      <span className="costumize-area">
        Radius <input name="radius" type="number" onChange={(event)=>{
          setState({ radius: event.target.value })
        }}/>
      </span>
      <br/>

    </div>
  );
}

export default App;

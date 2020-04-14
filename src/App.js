import React, { useState } from 'react';

import './reset.css';
import './App.css';

import BoxPreview from './components/BoxPreview'
import TopCustumizeSection from './components/CustumizeSection/Top';
import RightCustumizeSection from './components/CustumizeSection/Right';
import CssGenerator from './components/CssGenerator'

import updateBorderStyle from './functions/BorderUpdates/updateBorderStyle'
import updateBorderColor from './functions/BorderUpdates/updateBorderColor'
import updateBorderSize from './functions/BorderUpdates/updateBorderSize'
import updateBorderRadius from './functions/BorderUpdates/updateBorderRadius'


function App() {

  const [stateTop, setStateTop] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateRight, setStateRight] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateButtom, setStateButtom] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateLeft, setStateLeft] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })

  
  return (
    <div className="App">
      <BoxPreview/>
      
      <div id="area">
        
        <TopCustumizeSection
          stateTop={stateTop}
          setStateTop={setStateTop}
        />
        <RightCustumizeSection
          stateRight={stateRight}
          setStateRight={setStateRight}
        />

        

        <div className="custumize-section">
          <p>Bottom</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateButtom({ ...stateButtom, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'bottom')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input name="color" type="color" onChange={(event)=>{
              setStateButtom({ ...stateButtom, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateButtom({ ...stateButtom, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateButtom.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateButtom({ ...stateButtom, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/> <span>{stateButtom.radius+'%'}</span>
          </div>
        </div>

        <div className="custumize-section">
          <p>Left</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateLeft({ ...stateLeft, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'left')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input name="color" type="color" onChange={(event)=>{
              setStateLeft({ ...stateLeft, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'left')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateLeft({ ...stateLeft, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'left')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateLeft.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateLeft({ ...stateLeft, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'left')
            }}/> <span>{stateLeft.radius+'%'}</span>
          </div>
        </div>
      
      </div>

      <CssGenerator
        stateTop={stateTop}
        stateRight={stateRight}
        stateButtom={stateButtom}
        stateLeft={stateLeft}
      />

    </div>
  );
}

export default App;

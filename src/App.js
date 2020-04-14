import React, { useState } from 'react';

import './reset.css';
import './App.css';

import BoxPreview from './components/BoxPreview'
import TopCustumizeSection from './components/CustumizeSection/Top';
import RightCustumizeSection from './components/CustumizeSection/Right';
import BottomCustumizeSection from './components/CustumizeSection/Bottom';
import LeftCustumizeSection from './components/CustumizeSection/Left';
import CssGenerator from './components/CssGenerator'

function App() {

  const [stateTop, setStateTop] = useState({
    style: 'solid',
    color: '#fff',
    size: '5px',
    radius: '0',
  })
  const [stateRight, setStateRight] = useState({
    style: 'solid',
    color: '#fff',
    size: '5px',
    radius: '0',
  })
  const [stateBottom, setStateBottom] = useState({
    style: 'solid',
    color: '#fff',
    size: '5px',
    radius: '0',
  })
  const [stateLeft, setStateLeft] = useState({
    style: 'solid',
    color: '#fff',
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
        <BottomCustumizeSection
          stateBottom={stateBottom}
          setStateBottom={setStateBottom}
        />
        <LeftCustumizeSection
          stateLeft={stateLeft}
          setStateLeft={setStateLeft}
        />
      </div>

      <CssGenerator
        stateTop={stateTop}
        stateRight={stateRight}
        stateButtom={stateBottom}
        stateLeft={stateLeft}
      />

    </div>
  );
}

export default App;
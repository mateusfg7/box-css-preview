import React from 'react'

import '../styles.css'

import updateBorderStyle from '../../../functions/BorderUpdates/updateBorderStyle'
import updateBorderColor from '../../../functions/BorderUpdates/updateBorderColor'
import updateBorderSize from '../../../functions/BorderUpdates/updateBorderSize'
import updateBorderRadius from '../../../functions/BorderUpdates/updateBorderRadius'

export default function BottomCustumizeSection({ stateBottom, setStateBottom }) {
    return (
        <div className="custumize-section">
          <p>Bottom</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateBottom({ ...stateBottom, style: event.target.value })
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
              setStateBottom({ ...stateBottom, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateBottom({ ...stateBottom, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateBottom.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateBottom({ ...stateBottom, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/> <span>{stateBottom.radius+'%'}</span>
          </div>
        </div>
    )
}

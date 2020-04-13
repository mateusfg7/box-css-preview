import React, { useState } from 'react'

import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import changeBoxSize from '../../functions/SizeUpdates/changeBoxSize'

import './style.css'

export default function BoxPreview() {
    const [boxSize, setBoxSize] = useState({
        heigth: 150,
        width: 150
    })

    function ico(icon) {
        return (
            <FontAwesomeIcon icon={icon}/>
        )
    }
    
    return (
        <div id="main-box-area">
            <span className="box-size">{boxSize.width}x{boxSize.heigth}px</span>
            <div id="main-box"></div>
            <div className="size-change">
                <section>
                    
                    <span>w</span>
                    
                    <span
                        className="size-changer size-changer-minus size-width-minus"
                        onClick={
                            () => changeBoxSize("width-minus", boxSize, setBoxSize)
                        }
                    >{ico(faMinusSquare)}</span>
                    
                    <span
                        className="size-changer size-changer-plus size-width-plus"
                        onClick={
                            () => changeBoxSize("width-plus", boxSize, setBoxSize)
                        }
                    >{ico(faPlusSquare)}</span>
                
                </section>
                <section>
                    
                    <span>h</span>
                    
                    <span
                        className="size-changer size-changer-minus size-height-minus"
                        onClick={
                            () => changeBoxSize("height-minus", boxSize, setBoxSize)
                        }
                    >{ico(faMinusSquare)}</span>
                    
                    <span
                        className="size-changer size-changer-plus size-height-plus"
                        onClick={
                            () => changeBoxSize("height-plus", boxSize, setBoxSize)
                        }
                    >{ico(faPlusSquare)}</span>
                
                </section>
            </div>
        </div>
    )
}

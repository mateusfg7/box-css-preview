import React from 'react'

import './style.css'

export default function CssGenerator({ stateTop, stateRight, stateButtom, stateLeft }) {
    
    const value =`
border-style: ${stateTop.style} ${stateRight.style} ${stateButtom.style} ${stateLeft.style};
border-color: ${stateTop.color} ${stateRight.color} ${stateButtom.color} ${stateLeft.color};
border-width: ${stateTop.size} ${stateRight.size} ${stateButtom.size} ${stateLeft.size};
border-radius: ${stateTop.radius}% ${stateRight.radius}% ${stateButtom.radius}% ${stateLeft.radius}%;
    `
    return (
        <div>
            <div className="css-area">
                <h3>CSS</h3>
                <textarea id="text-to-copy" type="text" value={value}/>
                <br/>
            </div>
            <button onClick={() => {
                const areaToCopy = document.getElementById("text-to-copy")
                areaToCopy.select()
                document.execCommand('copy')
            }}>Copy css to clipboard</button>
        </div>
    )
}

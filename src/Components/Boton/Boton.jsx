import React from 'react'
import "./boton.css"

function Boton(props) {
    return (
        <button onClick={props.onClick} className="boton">{props.children || props.text}</button>
    )
}

export default Boton
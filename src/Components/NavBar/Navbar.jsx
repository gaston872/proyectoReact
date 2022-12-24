import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./navbar.css";
import { Link } from "react-router-dom";

/* const stylesIcon = {
    marginLeft: "30px"
}; */

function Navbar() {
    return (
        <div className="nav">
            
            {/* <div className="navLink"> */}<img className="logo" src="/img/logo.png" alt="logo"></img>
                <div className="menu">
                <Link to="/">Inicio</Link>
                <Link to="/categoria/Oleo">Oleo</Link>
                <Link to="/categoria/Acrílico">Acrílico</Link>
                <Link to="/categoria/Acuarela">Acuarela</Link>
                </div>
                {/* <Link to="/item"></Link> */}<CartWidget />
            {/* </div> */}
            
        </div>
    )
}

export default Navbar
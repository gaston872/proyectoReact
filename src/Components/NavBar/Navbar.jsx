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
            <img className="logo" src="/img/logo.png" alt="logo"></img>
            <div className="navLink">
                <Link to="/">Inicio</Link>
                <Link to="/categoria/Oleo">Oleo</Link>
                <Link to="/categoria/Acrílico">Acrílico</Link>
                <Link to="/categoria/Acuarela">Acuarela</Link>
                {/* <Link to="/item"></Link> */}
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar
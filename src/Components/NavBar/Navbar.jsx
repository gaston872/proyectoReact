import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./navbar.css";

const stylesIcon = {
    marginLeft: "30px"
};

function Navbar() {
    return (
        <div className="nav">
            <img className="logo" src="/img/logo.png" alt="logo"></img>
            <div className="navLink">
            <a  href="#">Oleo</a>
            <a  href="#">lapiz</a>
            <a  href="#">Acuarela</a>
            </div>
            <CartWidget/>
        </div>
    )
}

export default Navbar
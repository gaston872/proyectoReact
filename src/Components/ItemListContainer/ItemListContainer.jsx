import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./itemListContainer.css";

function ItemListContainer(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
        /* isFavorite === true ? setIsFavorite(false) : setIsFavorite(true); */
    }

    return (
        <>
            <h1>{props.greeting}</h1>
            <div className="card">
                <button
                    onClick={handleFavorite}
                    className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                    ♥
                </button>
                <div className="cardImg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU"
                        alt="imagen" />
                </div>
                <h2 className="titulo">Titulo</h2>
                <hr className="linea" />
                <p className="info">info</p>
                <div className="contador">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <button className="boton-agregar">Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemListContainer
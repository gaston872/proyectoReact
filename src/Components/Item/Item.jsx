import React, { useState } from 'react'
import ContadorProductos from '../ContadorProductos/ContadorProductos';
/* import products from '../../data/products'; */
import "./item.css";

function Item(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
        /* isFavorite === true ? setIsFavorite(false) : setIsFavorite(true); */
    }

    return (
        <>
            <div className="card">
                <button
                    onClick={handleFavorite}
                    className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                    ♥
                </button>
                <div className="cardImg">
                <img src={props.imgurl} alt="imagen producto"></img>
                </div>
                <h2 className="titulo">{props.nombre}</h2>
                <hr className="linea" />
                <h4>$ {props.precio}</h4>
                <p className="info">{props.descripcion}</p>
                {/* Contador */}
                <ContadorProductos stock={3}/>
            </div>
        </>
    )
}

export default Item
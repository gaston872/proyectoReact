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
                
                <h3 className="titulo">{props.nombre}</h3>
                <h5 className="precio">$ {props.precio}</h5>
                <hr className="linea" />
                <p>Categoría: {props.categoria}</p>
                <p>Técnica: {props.tecnica}</p>
                <p className="info">{props.descripcion}</p>
                <hr className="linea" />
                {/* Contador */}
                <ContadorProductos stock={3}/>
            </div>
        </>
    )
}

export default Item
import React, { useState } from 'react'
import ContadorProductos from '../ContadorProductos/ContadorProductos';
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
                {/* Contador */}
                <ContadorProductos stock={3}/>
            </div>
        </>
    )
}

export default ItemListContainer
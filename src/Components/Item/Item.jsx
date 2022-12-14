import React, { useState } from 'react'
/* import ContadorProductos from '../ContadorProductos/ContadorProductos'; */
/* import products from '../../data/products'; */
import { Link } from "react-router-dom";
import "./item.css";

function Item(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
        /* isFavorite === true ? setIsFavorite(false) : setIsFavorite(true); */
    }
    let urlDetail = `/item/${props.id}`

    /* let stylePrecio = {
        color: props.descuento? "green" : "rgb(100, 97, 97)"
    }
    style={stylePrecio}*/

    let classNamePrecio = props.descuento ? "precioDescuento" : "precio"
    let classNameItem = `card ${props.newProduct && "item-new"}`
    return (
        <>

            <div className={classNameItem}>
                <button
                    onClick={handleFavorite}
                    className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                    ♥
                </button>
                <div className="cardImg">
                    <img src={props.imgurl} alt="imagen producto"></img>
                </div>

                <h3 className="titulo">{props.nombre}</h3>
                <h5 className={classNamePrecio}>
                    $ {props.precio}
                    <br />
                    {/* {props.descuento? <small>{props.descuento}% off</small> : <></>} */}
                    {props.descuento && <small>{props.descuento}% off</small>}
                </h5>
                <hr className="linea" />
                <p className="info">Tipo: {props.tipo}</p>
                <p className="info">Técnica: {props.tecnica}</p>
                <hr className="linea" />
                {/* Contador */}
                {/* <ContadorProductos stock={3}/>  */}
                <Link className="link" to={urlDetail}>Seleccionar</Link>
            </div>

        </>
    )
}

export default Item
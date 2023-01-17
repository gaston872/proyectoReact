import React, { useState, useContext } from 'react'
import ContadorProductos from '../ContadorProductos/ContadorProductos';
import { cartContext } from '../../storage/cartContext';
import { Link } from 'react-router-dom';
import "./itemDetail.css"


function ItemDetail({ product }) {

    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0)

    const { addToCart, removeItem } = useContext(cartContext);

    function handleAddToCart(count) {
        setCantidadEnCarrito(count);
        addToCart(product, count);
    }

    return (
        <>
            <div className="card">
                <h1 className="titulo">{product.nombre}</h1>
                <img className="cardImg" src={product.imgurl} alt={product.nombre} />
                <h4 className="precio">$ {product.precio}</h4>
                {
                    cantidadEnCarrito ?
                        <Link className="link" to="/cart">Ir al carrito</Link>
                        :
                        <ContadorProductos onAddToCart={handleAddToCart} />
                }
            </div>
        </>
    )
}

export default ItemDetail
import React from 'react'
import {useContext} from "react"
import {cartContext} from "../../storage/cartContext"
import "./cartWidget.css"

function CartWidget() {
    const contexto = useContext(cartContext);
    const totalItems = contexto.totalItemsInCart() /* > 0 */;
    /* let cantidad = contexto.cart.length; */
    const cantidad = contexto.totalItemsInCart;
    return (
        <div className="carro">
        <img className="carrito" src="/img/shoppingcart2.png" alt="carrito"></img>  
        {
        totalItems > 0 && <span>{totalItems}</span>
        }
        </div>
    )
}

export default CartWidget
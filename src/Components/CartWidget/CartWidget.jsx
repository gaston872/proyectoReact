import React from 'react'
import {useContext} from "react"
import {cartContext} from "../../storage/cartContext"
import "./cartWidget.css"

function CartWidget() {
    const contexto = useContext(cartContext);
    /* let cantidad = contexto.cart.length; */
    const cantidad = contexto.totalItemsInCart;
    return (
        <div className="carro">
        <img className="carrito" src="/img/shoppingcart2.png" alt="carrito"></img>  
        <span>{contexto.totalItemsInCart()}</span>
        </div>
    )
}

export default CartWidget
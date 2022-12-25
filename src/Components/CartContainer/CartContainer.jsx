import React, { useContext } from 'react'
import { cartContext } from "../../storage/cartContext"

function CartContainer() {
    const { cart, removeItem } = useContext(cartContext);

    return (
        <div>
            <h1>Tu carrito</h1>
            {
                cart.map(item => 
                    <div>
                    <h3>{item.nombre}</h3>
                    <h4>$ {item.precio}</h4>
                    <p>cantidad: {item.count}</p>
                    <h4>total: ${}</h4>
                    <button>eliminar</button>
                    </div>
                    )
            }
        </div>
    )
}

export default CartContainer
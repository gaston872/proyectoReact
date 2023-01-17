import React, { useState } from 'react'
import Boton from '../Boton/Boton';
import './contadorProductos.css';

import { cartContext } from '../../storage/cartContext';
/* import '../ItemListContainer/itemListContainer.css'; */

function ContadorProductos( { stock, onAddToCart}) {
    const [count, setCount] = useState(1);

    function handleSuma() {
        if(count < stock)
        setCount(count + 1);
    }


    function handleResta() {
        if (count > stock)
        setCount(count - 1);
    }

    /* function onAddToCart(){
        console.log("agregado al carrito");
    } */

    return (
        <div className="contenedorContador">
        <div className="contador" >
            <Boton disabled={count === 1} onClick={handleResta}>-</Boton>
            <span>{count}</span>
            <Boton /* disabled={count === props.stock} */ onClick={handleSuma}>+</Boton>
        </div>
        <Boton onClick={()=>onAddToCart(count)}> Agregar al carrito </Boton>
        </div>
    )
}

export default ContadorProductos


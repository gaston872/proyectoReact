import React, { useState } from 'react'
import './contadorProductos.css';
/* import '../ItemListContainer/itemListContainer.css'; */

function ContadorProductos(props) {
    const [count, setCount] = useState(1);

    function handleSuma() {
        if(count < props.stock)
        setCount(count + 1);
    }


    function handleResta() {
        setCount(count - 1);
    }

    function onAddToCart(){
        console.log("agregado al carrito");
    }

    return (
        <div className="contenedorContador">
        <div className="contador" >
            <button disabled={count === 1} onClick={handleResta}>-</button>
            <span>{count}</span>
            <button disabled={count === props.stock} onClick={handleSuma}>+</button>
        </div>
        <button onClick={onAddToCart} className="boton-agregar">Agregar al carrito</button>
        </div>
    )
}

export default ContadorProductos


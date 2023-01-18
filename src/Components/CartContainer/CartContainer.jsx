import { faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react'
import swal from 'sweetalert';
import { createBuyOrder, createBuyOrder_WithStockControl } from '../../services/firebase';
import { cartContext } from "../../storage/cartContext"
import Boton from '../Boton/Boton';
import CheckOutForm from './CheckOutForm';
import "./carrito.css"

function CartContainer(props) {
    const [order, setOrder] = useState(false);
    const { cart, totalCompra, eliminarProducto, vaciarCarrito } = useContext(cartContext);

    function handleCheckOut(datosComprador) {
        const order = { comprador: datosComprador, items: cart, total: totalCompra, date: new Date() }

        createBuyOrder_WithStockControl(order).then((id) => {

            //funcion para vaciar carrito

            /* swal("Gracias por su compra", `se generó la orden correctamente, tu número de orden es: ${id}`, "success"); */

            setOrder(id);
        });
    }

    if (order)
    return(
        <div>
            <h1>Gracias!</h1>
            <p>Se generó la orden correctamente</p>
            <small>Tu id de compra: {order}</small>
        </div>
    );

    return (
        <><h1 className="titulo">Tu carrito</h1>
            <div className="titulosCarrito">
                <h3>Nombre</h3>
                <h3>Precio</h3>
                <h3>Cantidad</h3>
                <h3>Total</h3>
                <h3>Eliminar</h3>
            </div>  
                <div>
                {
                    cart.map(item =>
                        <div className="carritoCont">
                            <h3>{item.nombre}</h3>
                            <h4>$ {item.precio}</h4>
                            <p>cantidad: {item.count}</p>
                            <h4>total: ${(item.precio) * (item.count)}</h4>
                            <Boton onClick={()=>eliminarProducto(item.id)}>eliminar</Boton>
                        </div>
                    )
                }   
                </div>
            <div className="info">
            <h4>El total de tu compra es de  ${totalCompra()}</h4>
            <Boton onClick={()=>vaciarCarrito()}>Vaciar carrito</Boton>
            </div>    
                <CheckOutForm onCheckOut={handleCheckOut} />

            {/* <Boton onClick={handleCheckOut}>Finalizar compra</Boton> */}
        </>
    )
}


export default CartContainer
import { faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react'
import swal from 'sweetalert';
import { createBuyOrder, createBuyOrder_WithStockControl } from '../../services/firebase';
import { cartContext } from "../../storage/cartContext"
import Boton from '../Boton/Boton';
import CheckOutForm from './CheckOutForm';

function CartContainer(props) {
    const [order, setOrder] = useState(false);
    const { cart, totalCompra, eliminarProducto, vaciarCarrito } = useContext(cartContext);

    function handleCheckOut(datosComprador) {
        const order = { comprador: datosComprador, items: cart, total: /* calcular total desde context */999, date: new Date() }

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
        <>
            <div>
                <h1>Tu carrito</h1>
                {
                    cart.map(item =>
                        <div>
                            <h3>{item.nombre}</h3>
                            <h4>$ {item.precio}</h4>
                            <p>cantidad: {item.count}</p>
                            <h4>total: ${(item.precio) * (item.count)}</h4>
                            <button onClick={()=>eliminarProducto(item.id)}>eliminar</button>
                        </div>
                    )
                }
                <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
            </div>
            <h4>El total de tu compra es de  ${totalCompra()}</h4>

                <CheckOutForm onCheckOut={handleCheckOut} />

            {/* <Boton onClick={handleCheckOut}>Finalizar compra</Boton> */}
        </>
    )
}


export default CartContainer
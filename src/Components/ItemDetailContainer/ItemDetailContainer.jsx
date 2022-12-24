import React, { useState, useEffect, useContext } from 'react'
/* import products from '../../data/products'; */
import "../ItemListContainer/itemListContainer.css";
/* import Item from '../Item/Item'; */
import { useParams } from 'react-router-dom';
import {getSingleItem} from '../../services/mockservices';
import "../Item/item.css"
import ContadorProductos from '../ContadorProductos/ContadorProductos';
import { cartContext } from '../../storage/cartContext';


function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0)

    const {addToCart, removeItem} = useContext(cartContext);
    /* let id = useParams().id; */
    let {id} = useParams();
    

    useEffect(() => {
        getSingleItem(id)
        .then((respuesta) => setProduct(respuesta)
        .catch(error => alert("Item no encontrado")));
    }, [id]
    )

    function handleAddToCart(count){
        setCantidadEnCarrito(count);
        addToCart(product, count);
    }

    return (
        <div className="card">
            <h1 className="titulo">{product.nombre}</h1>
        <img className="cardImg" src={product.imgurl} alt={product.nombre}/>
        <h4 className="precio">$ {product.precio}</h4>
        <ContadorProductos onAddToCart ={handleAddToCart}/>
        </div>     
    );
}

export default ItemDetailContainer
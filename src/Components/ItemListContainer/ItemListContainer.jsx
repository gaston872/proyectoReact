import React, { useState, useEffect } from 'react'
/* import products from '../../data/products'; */
import "./itemListContainer.css";
/* import Item from '../Item/Item'; */
import getItems, { getItemsCategoria } from '../../services/mockservices';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const categoriaID = useParams().categoriaID;

    useEffect(() => {

        if(categoriaID === undefined){
            getItems()
            .then((respuesta) => {setProducts(respuesta);
        })
        .catch((error) => console.error(error))
        .finally(() => console.log("siempre me ejecuto"));
        }
        else {
            getItemsCategoria(categoriaID)
            .then((respuestaFiltrada) => setProducts(respuestaFiltrada))
            .catch((errorMsg) => alert(errorMsg));
        }
        
    }, [categoriaID]);


    return (
        <>
        <h1 className="greeting">{props.greeting}</h1>
        <ItemList products={products}/>
        </>
        
    );
}

export default ItemListContainer
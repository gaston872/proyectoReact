import React, { useState, useEffect } from 'react'
/* import products from '../../data/products'; */
import "./itemListContainer.css";
/* import Item from '../Item/Item'; */
import getItems from '../../services/mockservices';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems().then((respuesta) => setProducts(respuesta));
    }, []
    )


    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemList products={products}/>
        </>
        
    );
}

export default ItemListContainer
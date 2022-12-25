import React, { useState, useEffect } from 'react'
/* import products from '../../data/products'; */
import "./itemListContainer.css";
/* import Item from '../Item/Item'; */
import getItems, { getItemsCategoria } from '../../services/mockservices';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const categoriaID = useParams().categoriaID;
    /* const {categoriaID} = useParams(); */
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(categoriaID === undefined){
            getItems()
            .then((respuesta) => {setProducts(respuesta);
                setIsLoading(false);
        })
        .catch((error) => console.error(error))
        .finally(() => console.log("siempre me ejecuto"));
        }
        else {
            getItemsCategoria(categoriaID)
            .then((respuestaFiltrada) => setProducts(respuestaFiltrada))
            .catch((errorMsg) => alert(errorMsg));
            setIsLoading(false);
        }
        
    }, [categoriaID]);

    if (isLoading){
        return <Loader/>
    }

    return (
        <>
        <h1 className="greeting">{props.greeting}</h1>
        <ItemList products={products}/>
        </>
        
    );
}

export default ItemListContainer
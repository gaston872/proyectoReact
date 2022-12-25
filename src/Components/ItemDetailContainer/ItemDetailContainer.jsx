import React, { useState, useEffect } from 'react'
/* import products from '../../data/products'; */
import "../ItemListContainer/itemListContainer.css";
/* import Item from '../Item/Item'; */
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../../services/mockservices';
import "../Item/item.css"

import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';


function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    /* let id = useParams().id; */
    let { id } = useParams();


/*     useEffect(() => {
        getSingleItem(id)
            .then((respuesta) => setProduct(respuesta)
                .catch(error => alert("Item no encontrado")));
    }, [id]
    ) */

    //OTRA FORMA CON ASYN AWAIT
    async function getData(){
     let respuesta = await getSingleItem(id);
     setProduct(respuesta);
     setIsLoading(false);
    }
    useEffect(()=> { getData();}, []);

    return <>    
    {      
        isLoading?
            <Loader/>
        :
            <ItemDetail product={product} />
    };
    </>
}

export default ItemDetailContainer
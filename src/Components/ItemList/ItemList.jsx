import React from 'react'
import Item from "../Item/Item"

function ItemList(props) {
    return (
        <>
            <div className="flex">
                {props.products.map(item => {
                    return (<Item
                        key={item.id}
                        nombre={item.nombre}
                        imgurl={item.imgurl}
                        precio={item.precio}
                        tecnica={item.tecnica}
                        categoria={item.categoria}
                        descripcion={item.descripcion}
                    />
                    );
                })}</div>
        </>
    )
}

export default ItemList
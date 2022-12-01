import React from 'react'
import products from '../../data/products';
import "./itemListContainer.css";
import Item from '../Item/Item';

function ItemListContainer(props) {

    return (
        <>
            <h1>{props.greeting}</h1>
            <div className="flex">
            {products.map(item => {
                return (<Item nombre={item.nombre}
                            imgurl={item.imgurl}
                            precio={item.precio}
                            descripcion={item.descripcion}
                            />
                            );
            })}</div>
            {/* <Item 
                precio={200}
                título="tiuto"
                descripción="descripción"
                imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU"
            /> */}
           {/*  <div className="card">
                <button
                    onClick={handleFavorite}
                    className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                    ♥
                </button>
                <div className="cardImg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU"
                        alt="imagen" />
                </div>
                <h2 className="titulo">Titulo</h2>
                <hr className="linea" />
                <p className="info">info</p>
                
                <ContadorProductos stock={3}/>
            </div> */}
        </>
    )
}

export default ItemListContainer
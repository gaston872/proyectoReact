import { createContext, useState } from 'react';

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

//ESTATICO
/* function CartContextProvider(props) {
    let cart = [];
    return (
        <Provider value={{cart: cart}}>
            {props.children}
        </Provider>
    )
} */



function CartContextProvider(props) {
    const [cart, setCart] = useState([]);
    
    function totalItemsInCart(){
        let totalItemsInCart = 0;
        cart.forEach(item=> totalItemsInCart += item.count);
        return totalItemsInCart;
    }

    function addToCart(item, count) {
        let indexItemInCart = cart.findIndex(itemInContext => itemInContext.id === item.id)        /* const newCart = cart.map (item => item); */
        let isItemInCart = indexItemInCart !== -1;
        const newCart = [...cart];

        if (isItemInCart) {
            newCart[indexItemInCart].count += count;
            setCart(newCart);   
        } else {
            

            /* const newItem = item;
            newItem.count = count; */
            newCart.push({...item, count: count });

            /* newCart.push(newItem); */
            /* console.log(newItem); */
            setCart(newCart);
        }
        }

        function totalCompra(){
            
            return (cart.reduce((acc, elemento)=> acc + elemento.count * elemento.precio, 0))
            
        }

        function eliminarProducto(id){
            const newCart = cart.filter((item) => item.id !== id)
            setCart(newCart)
        }

        function vaciarCarrito(){
            return(
                setCart([])
                )
        }

    return (
        <Provider value={{ cart, addToCart, totalItemsInCart, totalCompra, eliminarProducto, vaciarCarrito }}>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };
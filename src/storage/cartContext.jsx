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
            newCart.push({ ...item, count });

            /* newCart.push(newItem); */
            /* console.log(newItem); */
            setCart(newCart);
        }


    }

    return (
        <Provider value={{ cart, addToCart, totalItemsInCart }}>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };
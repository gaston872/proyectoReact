import products from "../data/products";

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
           /*  console.log("Llamado a API resuelto"); */
            resolve(products);
        }, 2000);
    });
}

export default getItems
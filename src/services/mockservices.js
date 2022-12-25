import products from "../data/products";

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
           /*  console.log("Llamado a API resuelto"); */
            resolve(products);
        }, 1000);
    });
}

export function getItemsCategoria(categoriaID){
    return new Promise ((resolve, reject) => {
        let itemsFound = products.filter((item) => {
            return item.categoria === categoriaID;
        });
        if(itemsFound.length > 0)
        resolve(itemsFound);
        else reject("No hay productos para esa categoría")
    })
}

export function getSingleItem(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemFound = products.find(itemInArray => itemInArray.id === parseInt(id))
            if (itemFound)
                resolve(itemFound)
            else
                reject("Item no encontrado")
            /* resolve(products[6]); */
        }, 1000);
    });
}

export default getItems
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, documentId, writeBatch} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAb_RxD9KTmm1dRtoLyzuEqvO7C0kNv8rw",
    authDomain: "frutoskernart-4a303.firebaseapp.com",
    projectId: "frutoskernart-4a303",
    storageBucket: "frutoskernart-4a303.appspot.com",
    messagingSenderId: "779658872388",
    appId: "1:779658872388:web:e63cc17820cb2df4bf1e11"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getSingleItem(id){

    let docRef = doc(DB, "productos", id);

    let docSnapshot = await getDoc(docRef);

    let item = docSnapshot.data();
    item.id = docSnapshot.id;

    return item;
}

export async function getItems(){
    const collectionRef = collection(DB, "productos");
    const docsSnapshot = await getDocs(collectionRef)

    let docsArray = docsSnapshot.docs;

    /* let dataDocs = docsArray.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item
    });
 */

    let dataDocs = docsArray.map(doc => {
        return {...doc.data(), id: doc.id}
    });

    return dataDocs;
}

export async function getItemsCategoria(categoriaID){
    const collectionRef = collection(DB, "productos");

    let q = query(collectionRef, where("categoria", "==", categoriaID))

    const docsSnapshot = await getDocs(q);

    let docsArray = docsSnapshot.docs;

    let dataDocs = docsArray.map(doc => {
        return {...doc.data(), id: doc.id}
    });

    return dataDocs;
}

export async function createBuyOrder(order){
    const colectionRef = collection(DB, "compras");
    let newOrder = await addDoc(colectionRef, order);
    return newOrder.id
}

export async function exportItemsToFirestore(){
    const productos = [
        {
            id: 1,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Abstracto multicolor",
            tecnica: "Acrilico sobre lienzo",
            tipo: "Abstracto",
            categoria: "Acrílico",
            precio: 15000,
            stock: 3,
            descuento: 25
        },
    
        {
            id: 2,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Acuarela botánica",
            tecnica: "Acuarela",
            tipo: "Acuarela",
            categoria: "Acuarela",
            precio: 8000,
            stock: 18,
            newProduct: true
        },
    
        {
            id: 3,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Díptico abstracto",
            tecnica: "tecnicas mixtas",
            tipo: "Abstracto",
            categoria: "Oleo",
            precio: 12000,
            stock: 4
        },
    
        {
            id: 4,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Díptico flúo",
            tecnica: "tecnica: pouring",
            tipo: "Abstracto",
            categoria: "Oleo",
            precio: 13000,
            stock: 5
        },
    
        {
            id: 5,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Acuarela floral",
            tecnica: "Acuarela",
            tipo: "Acuarela",
            categoria: "Acuarela",
            precio: 7000,
            stock: 15
        },
    
        {
            id: 6,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Protea abstracta",
            tecnica: "Acrilico sobre lienzo",
            tipo: "Oleo",
            categoria: "Acrílico",
            precio: 14000,
            stock: 6
        },
    
        {
            id: 7,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Acuarela botánica",
            tecnica: "Acuarela",
            tipo: "Acuarela",
            categoria: "Acuarela",
            precio: 7500,
            stock: 22,
            descuento: 30
        },
    
        {
            id: 8,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Suculenta",
            tecnica: "Oleo sobre papel",
            tipo: "oleo",
            categoria: "Oleo",
            precio: 8500,
            stock: 3
        },
    
        {
            id: 9,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Retrato abuela",
            tecnica: "Acrilico sobre lienzo",
            tipo: "Retrato",
            categoria: "Acrílico",
            precio: 10000,
            stock: 2,
            newProduct: true
        },
    
        {
            id: 10,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Retrato Rita",
            tecnica: "Acrilico sobre lienzo",
            tipo: "Retrato",
            categoria: "Acrílico",
            precio: 11000,
            stock: 1
        },
    
        {
            id: 11,
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmVc5vdvACYKZnagLaFSFwrMASlPSh153Sg&usqp=CAU",
            nombre: "Autoretrato",
            tecnica: "Acrilico sobre lienzo",
            tipo: "Retrato",
            categoria: "Acrílico",
            precio: 10500,
            stock: "no disponible"
        },
    ];

    const collectionRef = collection(DB, "productos");


    for (let item of productos) {
        /* addDoc(collectionRef, item).then(respuesta => console.log("Item creado con el Id ->", respuesta.id)); */
        let newItem = await addDoc(collectionRef, item);
        console.log(newItem.id);
    }

}

export async function createBuyOrder_WithStockControl(order){
    const colectionRef = collection(DB, "orders");
    const colectionProductsRef = collection (DB, "products")
    let batch = writeBatch(DB)
    let arrayIds = order.items.map( itemInCart=> itemInCart.id);
    const q = query(colectionProductsRef, where(documentId(), "in", arrayIds))
    let snapshot = await getDocs(q);

    snapshot.docs.forEach( doc=> {
        let stockDisponible = doc.data().stock;
        let ItemInCart = order.items.find(item => item.id === doc.id);
        let countItemInCart = ItemInCart.count;
        let countInCart = 15;
        if (stockDisponible < countInCart)
            throw new Error(`Stock no disponible para el producto ${doc.id}`);
        else
        batch.update(doc.ref, {stock: stockDisponible - countItemInCart})
    })
    await batch.commit()
    let newOrder = await addDoc(colectionRef, order);
    return newOrder.id;
}



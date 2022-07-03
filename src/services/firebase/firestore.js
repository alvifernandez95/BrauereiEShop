import { db } from ".";
import { collection, where, query, getDocs, getDoc, doc } from 'firebase/firestore';

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

            getDocs(collectionRef).then(response => {
                const productos = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                resolve(productos)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'categorias')).then(response => {
            const categorias = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            resolve(categorias)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'productos', productId)).then(response => {
            const producto = {id: response.id, ...response.data()}
            resolve(producto)
        }).catch(error => {
            reject(error)
        })
    })
}
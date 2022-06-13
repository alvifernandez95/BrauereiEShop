import s from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
//import { getProductsById } from '../../utils/asyncmock'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    

    useEffect(() => {
        /*getProductsById(productId).then(response => {
            setProduct(response)
        })*/

        getDoc(doc(db, 'productos', productId)).then(response => {
            const producto = {id: response.id, ...response.data()}
            setProduct(producto)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className={s.ItemDetailContainer}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
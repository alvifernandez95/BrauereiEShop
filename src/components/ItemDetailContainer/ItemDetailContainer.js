import s from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getProductsById } from '../../utils/asyncmock'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()
    

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className={s.ItemDetailContainer}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
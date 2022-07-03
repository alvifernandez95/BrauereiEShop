import s from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getProduct } from '../../services/firebase/firestore'
import { useFirestore } from '../../hooks/useFirestore'

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const { isLoading, data, error } = useFirestore(() => getProduct(productId), [productId])    

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error</h1>
    }

    return(
        <div className={s.ItemDetailContainer}>
            <ItemDetail {...data}/>
        </div>
    )
}

export default ItemDetailContainer
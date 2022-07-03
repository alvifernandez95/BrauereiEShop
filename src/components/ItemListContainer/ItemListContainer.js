import ItemList from '../ItemList/ItemList'
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import { useFirestore } from '../../hooks/useFirestore';

const ItemListContainer = ({greeting}) => {
  
  const { categoryId } = useParams()
  const { isLoading, data, error } = useFirestore(() => getProducts(categoryId), [categoryId])


  if(isLoading) {
      return <h1>Loading...</h1>
  }

  if(error) {
      return <h1>Error</h1>
  }


  return(
    <div className={s.contenedor}>
        <h1>{ greeting }</h1>
        { 
            data.length > 0 
                ? <ItemList productos={data} />
                : <h2>No hay productos</h2>
            }
    </div>
 )
}

export default ItemListContainer

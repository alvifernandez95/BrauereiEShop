import {useState, useEffect} from 'react';
import customFetch from '../../utils/CustomFetch';
import productos from '../../utils/productos';
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'
import { getProducts } from '../../utils/asyncmock';
import { getProductsByCategory } from '../../utils/asyncmock';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if(!categoryId) {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    } else {
        getProductsByCategory(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
}, [categoryId])

  if(loading) {
      return <h1>Loading...</h1>
  }

  //return (
  //    <div className={s.contenedor} >
  //        <ItemList productos={items}/>
  //    </div>
  //);
  return(
    <div className={s.contenedor}>
        <h1>{ greeting }</h1>
        { 
            products.length > 0 
                ? <ItemList productos={products} />
                : <h2>No hay productos</h2>
            }
    </div>
 )
}

export default ItemListContainer

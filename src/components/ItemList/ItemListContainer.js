import {useState, useEffect} from 'react';
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'
import { getProducts } from '../../utils/asyncmock';
import { getProductsByCategory } from '../../utils/asyncmock';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

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

    useEffect(() => {
        setTimeout(() => {
            setTitle('Nuestros Productos')
        }, 3000)
    })

  if(loading) {
      return <h1>Loading...</h1>
  }


  return(
    <div className={s.contenedor}>
        <h1>{ title }</h1>
        { 
            products.length > 0 
                ? <ItemList productos={products} />
                : <h2>No hay productos</h2>
            }
    </div>
 )
}

export default ItemListContainer

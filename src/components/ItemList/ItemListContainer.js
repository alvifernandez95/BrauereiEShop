import {useState, useEffect} from 'react';
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId).then(response => {
        setProducts(response)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
    
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

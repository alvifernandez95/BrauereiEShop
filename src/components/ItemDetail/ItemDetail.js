import s from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail({imagen, nombre, id, precio, stock, pais, estilo, porcentaje, IBU, descripcion}) {
    
    const [quantity, setQuantity] = useState(0)

    const {addItem , getProduct} = useContext(CartContext) 
    
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        addItem({id, nombre, precio, quantity, imagen})
    }
    
    return (
        <div className={s.cardContainer} key={id}>
            <div className={s.titleImage}>
                <h1><b>{nombre}</b></h1>
                <img src={imagen} alt={nombre} className={s.componentsImg}/>
            </div>
            <div className={s.cardInfo}>
                <h2>$ {precio}</h2>
                <p><b>Pais de origen: {pais} </b></p>
                <p><b>Estilo: {estilo}</b></p>
                <p><b>% de alcohol: {porcentaje}%</b></p>
                <p><b>IBU: {IBU}</b></p>
                <p>Descripcion: {descripcion}</p>
                <footer className='ItemFooter'>
                    { quantity > 0  ? <Link to='/cart' className={s.Finalizar}>Finalizar</Link> : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail
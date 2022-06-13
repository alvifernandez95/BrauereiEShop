import s from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useNotification } from '../../notification/Notification';

const InputCount = ({ onAdd, stock, initial = 1}) => {
    const [quantity, setQuantity] = useState(initial)



    const handleChange = (e) => {
        if(e.target.value <= stock && e.target.value > 0) {
            setQuantity(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={quantity}/>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

function ItemDetail({imagen, nombre, id, precio, stock, pais, estilo, porcentaje, IBU, descripcion}) {
    
    const [quantity, setQuantity] = useState(0)
    const [inputType, setInputType] = useState('button')

    const { setNotification } = useNotification()

    const {addItem , getProduct} = useContext(CartContext)

    const Count = inputType === 'button' ? ItemCount : InputCount
    
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        setNotification('success', 'Se agrego correctamente al carrito')
        addItem({id, nombre, precio, quantity: Number(quantity), imagen})
    }
    
    return (
        <div className={s.cardContainer} key={id}>
            <button onClick={() => setInputType('input')}>Cambiar contador</button>
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
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail

import { useContext } from "react"
import CartContext from "../../context/CartContext"
import s from './Cart.module.css'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div className={s.CartContainer}>
            <h1 className={s.Title}>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className={s.Card}>
                            <img src={prod.imagen} alt={prod.nombre} className={s.Imagen}/>
                            <div ><b>{prod.nombre}</b></div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio unitario: ${prod.precio}</div>
                            <div>Subtotal: ${prod.precio * prod.quantity}</div>
                            <button onClick={() => removeItem(prod.id)} className={s.Remove}>X</button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import s from './CartItem.module.css'

const CartItem = ({ id, nombre, quantity, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className={s.CardCartItem}>
            <header className={s.HeaderCartItem}>
                <h2 className={s.ItemHeaderCartItem}>
                    {nombre}
                </h2>
            </header>
            <section className={s.ContainerItemCartItem}>
                <p className={s.InfoCartItem}>
                    Cantidad: {quantity}
                </p>
                <p className={s.InfoCartItem}>
                    Precio x Unidad: ${precio}
                </p>
            </section>           
            <footer className={s.ItemFooterCartItem}>
                 <p className={s.InfoCartItem}>
                     Subtotal: ${precio * quantity}
                 </p>
                 <button className={s.ButtonCartItem} onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem

import { useContext } from "react"
import CartContext from "../../context/CartContext"
import s from "./Cart.module.css"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div className={s.CartContainer}>
            <h1 className={s.MainTitle}>Cart</h1>
            { cart.map(p => <CartItem className={s.CartContent} key={p.id} {...p}/>) }
            <h3 className={s.SubTitle}>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className={s.Button}>Limpiar carrito</button>
            <button className={s.Button}>Generar Orden</button>

        </div>
    )
}

export default Cart
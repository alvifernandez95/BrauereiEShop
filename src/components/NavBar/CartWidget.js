import s from './CartWidget.module.css';
import CartLogo from './CartLogo';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart' className={s.CartWidget}>
            <CartLogo fill='#EBAD17' className={s.ShoppingCartLogo}/>
            <div className={s.Quantity}>
                {quantity}
            </div>
        </Link>
    )
}

export default CartWidget
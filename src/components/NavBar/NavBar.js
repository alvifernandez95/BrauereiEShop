import s from './NavBar.module.css';
import logo from './LogoBrauerei.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import {getCategories} from '../../services/firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    useEffect(() => {
        getCategories().then(response => {
            setCategories(response)
        })
    } , [])
    return (
        <nav className={s.mainNav}>
            <Link to='/' className={s.LogoLink}>
                <div className={s.logoGroup}>
                    <img src={logo} alt ='Logo' className={s.Logo} />
                    <h1 className={s.Title}>Brauerei</h1>    
                </div>
            </Link>
            
            <div className={s.Categories}>
                {categories.map(cat => (
                    <NavLink key={cat.id} to={`category/${cat.id}`}  className={s.Option}>
                        {cat.label}
                    </NavLink>
                ))}
                
            </div>
            <div>
                {quantity > 0 &&  <CartWidget/>}
            </div>
        </nav>
    )
}

export default NavBar
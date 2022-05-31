import s from './NavBar.module.css';
import logo from './LogoBrauerei.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.mainNav}>
            <Link to='/'>
                <div className={s.logoGroup}>
                    <img src={logo} alt ='Logo' className={s.Logo} />
                    <h1 className={s.Title}>Brauerei</h1>    
                </div>
            </Link>
            
            <div className={s.Categories}>
                <NavLink to='category/importadas'  className={s.Option}>Importadas</NavLink>
                <NavLink to='category/nacionales' className={s.Option}>Nacionales</NavLink>
                <NavLink to='category/accesorios' className={s.Option}>Accesorios</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar
import s from './NavBar.module.css';
import logo from './LogoBrauerei.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.mainNav}>
            <div className={s.logoGroup}>
                <img src={logo} alt ='Logo' className={s.Logo} />
                <h1>Brauerei</h1>    
            </div>
            <div className={s.buttonGroup}>
                <Button variant='secondary' className={s.navButton}>Nacionales</Button>
                <Button variant='secondary' className={s.navButton}>Importadas</Button>
                <Button variant='secondary' className={s.navButton}>Accesorios</Button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar
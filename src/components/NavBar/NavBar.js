import './NavBar.css';
import logo from './LogoBrauerei.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav class='mainNav'>
            <div class='logoGroup'>
                <img src={logo} alt ='Logo' class = 'Logo' />
                <h1>Brauerei</h1>    
            </div>
            <div class='buttonGroup'>
                <Button variant='secondary'>Nacionales</Button>
                <Button variant='secondary'>Importadas</Button>
                <Button variant='secondary'>Accesorios</Button>
            </div>
        </nav>
    )
}

export default NavBar
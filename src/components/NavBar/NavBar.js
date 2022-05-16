import './NavBar.css';
import logo from './LogoBrauerei.png';

const NavBar = () => {
    return (
        <nav class='mainNav'>
            <div class='logoGroup'>
                <img src={logo} alt ='Logo' />
                <h1>Brauerei</h1>    
            </div>
            <div>
                <button>Nacionales</button>
                <button>Importadas</button>
                <button>Accesorios</button>
            </div>
        </nav>
    )
}

export default NavBar
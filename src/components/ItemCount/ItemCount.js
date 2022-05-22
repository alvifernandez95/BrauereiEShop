import React, {useState} from "react";
import s from './ItemCount.module.css'

function ItemCount({stock}){
    const [count, setCount] = useState(0);
    
    function suma(){
        if(count < stock) {
            setCount(count + 1);
        }
    }
    
    function resta(){
        if(count > 0) {
            setCount(count - 1);
        }
    }

    function agregar(){
        if(count <= 0) {alert("No se agregó ningún producto al carrito.")
        }else {
            alert('Agregaste ' + count + ' productos a tu carrito.');
        }
    }

    return (
        <div className={s.containerCompraCounter}>
            <div className={s.contadorContainer}>
                <button onClick={resta} className={s.danger}>-</button>
                <p className={s.contador}>{count}</p>
                <button onClick={suma} className={s.success}>+</button>
            </div>
            <button onClick={agregar} className={s.addProduct}>Comprar</button>
        </div>
    )

}

export default ItemCount
import React, {useState} from "react";
import s from './ItemCount.module.css'

function ItemCount({onConfirm, stock, initial=0}){
    const [count, setCount] = useState(initial);
    
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

    

    return (
        <div className={s.containerCompraCounter}>
            <div className={s.contadorContainer}>
                <button onClick={resta} className={s.danger}>-</button>
                <p className={s.contador}>{count}</p>
                <button onClick={suma} className={s.success}>+</button>
            </div>
            <button onClick={() => onConfirm(count)} className={s.addProduct}>Agregar</button>
        </div>
    )

}

export default ItemCount
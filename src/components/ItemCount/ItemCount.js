import React, {useState} from "react";
import s from './ItemCount.module.css'

function ItemCount({onAdd, stock=0, initial=1}){
    const [quantity, setQuantity] = useState(initial);
    
    function suma(){
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    
    function resta(){
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    

    return (
        <div className={s.containerCompraCounter}>
            <div className={s.contadorContainer}>
                <button onClick={resta} className={s.danger}>-</button>
                <p className={s.contador}>{quantity}</p>
                <button onClick={suma} className={s.success}>+</button>
            </div>
            <button onClick={() => onAdd(quantity)} className={s.addProduct}>Agregar</button>
        </div>
    )

}

export default ItemCount
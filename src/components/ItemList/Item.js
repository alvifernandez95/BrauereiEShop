import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import s from "./Item.module.css";
import {Link} from 'react-router-dom';
import { useState } from "react";

function Item({imagen, nombre, id, precio, stock}){
    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (count) => {
        setQuantity(count)
    }

    return (
        <div className={s.cardContainer} key={id}>
            <img src={imagen} alt={nombre} className={s.componentsImg}/>
            <div className={s.cardInfo}>
                <h4><b>{nombre}</b></h4>
                <p>$ {precio}</p>
            </div>
            {quantity > 0  ? <Link to='/cart' className={s.Finalizar}>Finalizar</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd}/>}
            <Link to={`/detail/${id}`} className={s.Option}>Ver Detalle</Link>
        </div>
    )
}

export default Item
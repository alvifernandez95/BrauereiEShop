import React from "react";
import s from "./Item.module.css";
import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

function Item({imagen, nombre, id, precio, stock}){
    const [quantity, setQuantity] = useState(0)

    const {addItem , getProduct} = useContext(CartContext) 
    
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem({id, nombre, precio, quantity, imagen})
    }

    return (
        <div className={s.cardContainer} key={id}>
            <img src={imagen} alt={nombre} className={s.componentsImg}/>
            <div className={s.cardInfo}>
                <h4><b>{nombre}</b></h4>
                <p>$ {precio}</p>
            </div>
            
            <Link to={`/detail/${id}`} className={s.Option}>Ver Detalle</Link>
        </div>
    )
}

export default Item
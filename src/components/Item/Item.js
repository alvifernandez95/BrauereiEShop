import React from "react";
import s from "./Item.module.css";
import {Link} from 'react-router-dom';


function Item({imagen, nombre, id, precio}){
    
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
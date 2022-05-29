import s from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({imagen, nombre, id, precio, stock, pais, estilo, porcentaje, IBU, descripcion}) {
    return (
        <div className={s.cardContainer} key={id}>
            <div>
                <h1><b>{nombre}</b></h1>
                <img src={imagen} alt={nombre} className={s.componentsImg}/>
            </div>
            <div className={s.cardInfo}>
                <p>$ {precio}</p>
                <p>Pais de origen: {pais} </p>
                <p>Estilo: {estilo}</p>
                <p>% de alcohol: {porcentaje}%</p>
                <p>IBU: {IBU}</p>
                <p>Descripcion: {descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail
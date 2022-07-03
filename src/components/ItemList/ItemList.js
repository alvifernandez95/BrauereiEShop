import Item from '../Item/Item'

function ItemList ({productos}) {
    return (
        productos.map(p => (
            <Item

            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            id={p.id}
            />
        )
    )
    )
}


export default ItemList
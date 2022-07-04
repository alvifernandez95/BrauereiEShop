
import {useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import s from "./Cart.module.css"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import {addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db, collectionsName } from "../../services/firebase"
import { useNotification } from "../../notification/Notification"
import ContactForm from "../ContactForm/ContactForm"


const Cart = () => {
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false)
    const [successOrder, setSuccessOrder] = useState(false)
    const [orderInfo, setOrderInfo] = useState({})
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext) 
    
    const {setNotification} = useNotification()

    const [buttonPopup, setButtonPopup] = useState(false)

    const [buyer, setBuyer] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        comment: ""
    })

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer,
            items: cart, 
            total: getTotal()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'productos')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then( response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder) 
                } else {
                    return Promise.reject({type: 'out_of_stock', products: outOfStock})
                }
            }).then(({id}) => {
                batch.commit()
                setOrderInfo(objOrder)
                clearCart()
                setNotification('success', `El id de la orden es : ${id}`)
                setSuccessOrder(true)
            }).catch(error => {
                setNotification('error', `Algunos productos no tienen stock.`)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Generando Orden...</h1>
    }

    if(getQuantity() === 0 && !successOrder) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>
                    <h2>Regresa al Inicio para continuar con tus compras.</h2>
                </Link>
            </div>
            
        )
    }

    if(successOrder) {
        return (
            <div className={s.orderInfoContainer}>
                <h1 className={s.orderInfoTitle}>Su orden ha sido generada correctamente</h1>
                <div className={s.orderInfoBuyer}>
                    <h2>Datos del Comprador</h2>
                    <p><b>Nombre:</b> {buyer.name}</p>
                    <p><b>E-mail:</b> {buyer.email}</p>
                    <p><b>Dirección:</b> {buyer.address}</p>
                    <p><b>Teléfono</b> {buyer.phone}</p>
                </div>
                <div>
                    <h2>Datos de Los productos</h2>
                    {orderInfo.items.map(prod => {
                        return(
                            <div className={s.orderInfoProducts}>
                                <p><b>Nombre:</b> {prod.nombre}</p>
                                <p><b>Cantidad:</b> {prod.quantity}</p>
                                <p><b>Precio:</b> {prod.precio}</p>
                            </div>
                        )
                    })}
                </div>
                <Link to='/'>
                    <h2>Vover a la página de inicio.</h2>
                </Link>
            </div>
        )
    }

    return (     
        <div className={s.CartContainer}>
            <h1 className={s.MainTitle}>Cart</h1>
            { cart.map(p => <CartItem className={s.CartContent} key={p.id} {...p}/>) }
            <h3 className={s.SubTitle}>Total: ${getTotal()}</h3>
            {!valid ?<button onClick={() => setButtonPopup(true)} className={s.Button}>Registrarse</button>:null}
            <button onClick={() => clearCart()} className={s.Button}>Limpiar carrito</button>
            <ContactForm buyer={buyer} setBuyer={setBuyer} trigger={buttonPopup} setTrigger={setButtonPopup} valid={valid} setValid={setValid}/>
            {valid ? <button className={s.Button} onClick={createOrder}>Generar Orden</button>:null}

        </div>
    )
}

export default Cart
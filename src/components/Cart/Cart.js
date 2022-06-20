
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
    const [loading, setLoading] = useState(false)

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
                clearCart()
                setNotification('success', `El id de la orden es : ${id}`)
            }).catch(error => {
                setNotification('error', `Algunos productos no tienen stock.`)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Generando Orden...</h1>
    }

    if(getQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>
                    <h2>Regresa al Inicio para continuar con tus compras.</h2>
                </Link>
            </div>
            
        )
    }

    return (     
        <div className={s.CartContainer}>
            <h1 className={s.MainTitle}>Cart</h1>
            { cart.map(p => <CartItem className={s.CartContent} key={p.id} {...p}/>) }
            <h3 className={s.SubTitle}>Total: ${getTotal()}</h3>
            <button onClick={() => setButtonPopup(true)} className={s.Button}>Registrarse</button>
            <button onClick={() => clearCart()} className={s.Button}>Limpiar carrito</button>
            <ContactForm buyer={buyer} setBuyer={setBuyer} trigger={buttonPopup} setTrigger={setButtonPopup}/>
            <button className={s.Button} onClick={createOrder}>Generar Orden</button>

        </div>
    )
}

export default Cart
import s from "./ContactForm.module.css"
import { useState } from "react"
import { useNotification } from "../../notification/Notification"

const ContactForm = ({buyer, setBuyer, trigger, setTrigger}) => {

    const {setNotification} = useNotification()

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(buyer.name && buyer.email && buyer.phone && buyer.address) {
            setValid(true);
        }
        setSubmitted(true);
    }

    const closeSubmit = () => {
        if (submitted){
            setTrigger(false)
        }
    }

    return (trigger) ? (
        <div className={s.formContainer}>
            <button className={s.closeButton} onClick={() => setTrigger(false)}>x</button>
            <form className={s.registerForm} onSubmit={handleSubmit}>
                {submitted && valid ? setNotification('success', `Su información de envío se almacenó correctamente`):null}
                <input 
                    value={buyer.name} 
                    onChange={(e) => setBuyer({...buyer, name: e.target.value})}
                    className={s.formField}
                    placeholder="Nombre"
                    name="firstName"/>
                {submitted && !buyer.name ? <span>Por favor ingrese su nombre</span> : null}
                <input 
                    value={buyer.email}
                    onChange={(e) => setBuyer({...buyer, email: e.target.value})}
                    className={s.formField}
                    placeholder="Correo electrónico"
                    name="email"/>
                {submitted && !buyer.email ?<span>Por favor ingrese su correo electrónico</span>: null}
                <input 
                    value={buyer.phone}
                    onChange={(e) => setBuyer({...buyer, phone: e.target.value})}
                    className={s.formField}
                    placeholder="Teléfono"
                    name="phone"/>
                {submitted && !buyer.phone ? <span>Por favor ingrese su número telefónico</span> : null}
                <input 
                    value={buyer.address}
                    onChange={(e) => setBuyer({...buyer, address: e.target.value})}
                    className={s.formField}
                    placeholder="Dirección"
                    name="address"/>
                {submitted && !buyer.address ? <span>Por favor ingrese su dirección</span> : null}
                <input 
                    value={buyer.comment}
                    onChange={(e) => setBuyer({...buyer, comment: e.target.value})}
                    className={s.formField}
                    placeholder="Comentario"
                    name="comment"/>
                <button className={s.formField} type="submit" onClick={closeSubmit}>
                    Registrarse
                </button>
            </form>
            

        </div>
    ) : "";
}

export default ContactForm
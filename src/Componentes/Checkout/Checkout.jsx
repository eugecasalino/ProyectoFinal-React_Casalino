import { useContext, useState } from "react"
import { db } from '../../Services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [order, setOrder] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { cart, setCart } = useContext(CartContext)

    const formatOrder = {
        cart: cart,
        nombre,
        email,
        telefono,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const orderRef = collection(db, "ordenes")
        const orderId = await addDoc(orderRef, formatOrder)
        setCart([])
        setOrder(orderId.id)
        setIsSubmitting(false)
    }

        if (order) {
            return <h3>Compra realizada. ID de la orden: {order}</h3>
        }

        return (
            <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p className='label'>Nombre: </p>
                <input type="text" placeholder='Nombre y Apellido' onChange={e => setNombre(e.target.value)}/>
                <p className='label'>Email: </p>
                <input type="text" placeholder='Correo electrónico' onChange={e => setEmail(e.target.value)}/>
                <p className='label'>Teléfono: </p>
                <input type="number" placeholder='Teléfono' onChange={e => setTelefono(e.target.value)}/>
                <button type='submit'>{isSubmitting ? 'Cargando...' : 'Confirmar compra'}</button>
            </form>
        </div>
        )
}

export default Checkout
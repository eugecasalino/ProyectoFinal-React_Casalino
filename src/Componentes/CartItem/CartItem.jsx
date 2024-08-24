import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartItem = ({ producto }) => {
    const { removeFromCart } = useContext(CartContext)
    const { id, nombre, precio, quantity } = producto

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeFromCart(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem
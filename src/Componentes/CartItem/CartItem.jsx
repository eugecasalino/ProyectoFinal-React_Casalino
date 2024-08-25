import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
<<<<<<< HEAD
import ItemCount from '../../ItemCount/ItemCount'

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className='cart-item' id={product.id}>
            <h4>{product.nombre}</h4>
            <img className='img' src={product.image} />
            <p>Precio: ${product.precio}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Subtotal a pagar: ${product.precio * product.cantidad}</p>
            <ItemCount product={product} />
            <button onClick={() => removeItem(product.id)}>Eliminar producto.</button>
=======

const CartItem = ({ producto }) => {
    const { removeFromCart } = useContext(CartContext)
    const { id, nombre, precio, quantity } = producto

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeFromCart(id)}>Eliminar</button>
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
        </div>
    )
}

export default CartItem
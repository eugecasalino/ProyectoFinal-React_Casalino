import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
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
        </div>
    )
}

export default CartItem
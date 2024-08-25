import { useState } from 'react'
<<<<<<< HEAD
import { CartContext } from '../Context/CartContext'

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1)
    const {addToCart} = useContext(CartContext)

    return (
        <div>
            <button onClick={() => setCount(count >= 1 ? count - 1 : 0)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => addToCart(product, count)}>Agregar al carrito</button>
=======

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
        </div>
    )
}

export default ItemCount
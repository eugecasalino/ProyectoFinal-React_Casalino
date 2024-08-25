import { useState } from 'react'
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
        </div>
    )
}

export default ItemCount
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h3>Tu carrito está vacío.</h3>
                <Link to='/'>Ir al inicio</Link>
            </div>
        )
    }

    return (
        <>
            {cart.length > 0 &&
                cart.map(e => {
                    return (
                        <CartItem key={e.id} product={e} />
                    )
                })
            }
            <button onClick={() => setCart([])}>Vaciar carrito</button>
            <Link className='link' to='/checkout'>Finalizar compra</Link>
        </>
    )
}

export default Cart

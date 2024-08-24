import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeFromCart, clearCart, cartTotal } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h3>Tu carrito está vacío.</h3>
                <Link to='/'>Ir al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(item => (
                <CartItem key={item.id} producto={item} />
            ))}
            <div>
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link className='link' to='/checkout'>Finalizar compra</Link>
            </div>
        </div>
    );
};

export default Cart

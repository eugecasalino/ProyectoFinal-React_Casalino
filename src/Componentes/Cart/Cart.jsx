import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
<<<<<<< HEAD
    const { cart, setCart } = useContext(CartContext)
=======
    const { cart, removeFromCart, clearCart, cartTotal } = useContext(CartContext)
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35

    if (cart.length === 0) {
        return (
            <div>
                <h3>Tu carrito está vacío.</h3>
                <Link to='/'>Ir al inicio</Link>
            </div>
        )
    }

    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35

export default Cart

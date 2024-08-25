import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
<<<<<<< HEAD
    const { cart, itemQuantity } = useContext(CartContext)

    return (
        <div className='contenedor'>
            <span className='cantidad'>🛒 {itemQuantity()}</span>
            <Link to='/cart'></Link>
        </div>
    )

=======
    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div>🛒
                <span>{cartQuantity}</span>
            </div>
        </Link>
    )
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
}

export default CartWidget
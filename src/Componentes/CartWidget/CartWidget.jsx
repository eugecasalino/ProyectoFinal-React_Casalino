import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div>🛒
                <span>{cartQuantity}</span>
            </div>
        </Link>
    )
}

export default CartWidget
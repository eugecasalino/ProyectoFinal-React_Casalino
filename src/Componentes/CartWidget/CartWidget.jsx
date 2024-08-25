import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart, itemQuantity } = useContext(CartContext)

    return (
        <div className='contenedor'>
            <span className='cantidad'>🛒 {itemQuantity()}</span>
            <Link to='/cart'></Link>
        </div>
    )

}

export default CartWidget
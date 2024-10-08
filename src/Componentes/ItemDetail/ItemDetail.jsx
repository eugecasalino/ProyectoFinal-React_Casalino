import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {

    const { id, nombre, image, precio, description } = product
    const { itemExists } = useContext(CartContext)


    return (
        <div>
            <h3>{nombre}</h3>
            <img className='img' src={image} />
            <p>{description}</p>
            <p>${precio}</p>
            {
                itemExists(product.id) ?
                    <Link className='link' to='/cart'>Ir al carrito</Link>
                    : <ItemCount product={product} />
            }
        </div>
    )
}

export default ItemDetail
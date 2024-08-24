import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'


    export const ItemDetail = ({ producto }) => {
    
    
    const { id, nombre, image, precio, description } = producto
    const { itemExists } = useContext(CartContext)

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={image} alt={`foto del producto ${nombre}`} />
            <p>{description}</p>
            <p>${precio}</p>
            {
                itemExists(id)
                    ? <Link className='link' to='/cart'>Ir al carrito</Link>
                    : <ItemCount producto={producto} />
            }
        </div>
    )
}
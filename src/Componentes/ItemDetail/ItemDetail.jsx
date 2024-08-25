import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'


<<<<<<< HEAD
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
=======
    const ItemDetail = ({ producto }) => {
        
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
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
            }
        </div>
    )
}

export default ItemDetail
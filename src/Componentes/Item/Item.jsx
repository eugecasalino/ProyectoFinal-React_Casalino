import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ e }) => {
    return (
        <div className='item-card'>
            <h2>{e.nombre}</h2>
            <img src={e.image} alt={e.nombre} />
            <p>{e.precio}</p>
            <Link to={`/detalle/${e.id}`}>Ver detalles</Link>
        </div>
    );
}

export default Item
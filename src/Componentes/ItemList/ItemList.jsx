import './ItemList.css'
import Item from '../Item/Item'

<<<<<<< HEAD
const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map((e) => {
=======
const ItemList = ({ productos }) => {

    return (
        <div className='lista'>
            {productos.map((e) => {
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
                return (
                    <Item key={e.id} e={e} />
                )
            })}
        </div>
    )
}

export default ItemList
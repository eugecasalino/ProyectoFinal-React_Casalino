import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map((e) => {
                return (
                    <Item key={e.id} e={e} />
                )
            })}
        </div>
    )
}

export default ItemList
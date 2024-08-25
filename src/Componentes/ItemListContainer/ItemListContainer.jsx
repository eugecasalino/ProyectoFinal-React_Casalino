import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../Services/firebaseConfig'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {cat} = useParams()

    useEffect(() => {
        if (cat) {
            const productsbyCat = query(collection(db, 'items'), where('category', '==', cat))
            getDocs(productsbyCat).then(snapshot => {
                const categoryProducts = snapshot.docs.map(doc => {
                    const withId = doc.data()
                    return { id: doc.id, ...withId }
                })
                setProducts(categoryProducts)
            }).finally(() => setLoading(false))
        } else {
            const productsRef = collection(db, 'items')
            getDocs(productsRef).then(snapshot => {
                const dataProducts = snapshot.docs.map(doc => {
                    const withId = doc.data()
                    return { id: doc.id, ...withId }
                })
                setProducts(dataProducts)
            }).finally(() => setLoading(false))
        }
    }, [cat])

    if (loading) {
        return (
            <h2>Cargando...</h2>
        )
    }

    if (error) {
        return (
            <h2>{error}</h2>
        )
    }

    return (
        products.length > 0 &&
        <ItemList products={products} />
    )
}

export default ItemListContainer

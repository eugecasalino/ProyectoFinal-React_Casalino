import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../Services/firebaseConfig'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { categoriaId } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productsQuery;
                if (categoriaId) {
                    productsQuery = query(collection(db, 'items'), where('category', '==', categoriaId))
                } else {
                    productsQuery = collection(db, 'items');
                }

                const snapshot = await getDocs(productsQuery);
                const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setProductos(productsList);
            } catch (err) {
                setError('Error al obtener productos. Por favor, inténtelo de nuevo más tarde.')
            } finally {
                setLoading(false)
            }
        };

        fetchProducts()
    }, [categoriaId])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return productos.length > 0 ? <ItemList products={productos} /> : <h2>No hay productos disponibles.</h2>
}

export default ItemListContainer

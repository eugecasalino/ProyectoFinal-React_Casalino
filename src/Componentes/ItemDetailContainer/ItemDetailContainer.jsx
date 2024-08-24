import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Services/firebaseConfig'
import {ItemDetail} from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const docRef = doc(db, 'items', itemId)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() })
                } else {
                    setError('El producto no existe')
                }
            } catch (err) {
                setError('Error al obtener el producto. Por favor, inténtelo de nuevo más tarde.')
            } finally {
                setLoading(false)
            }
        }

        fetchItem()
    }, [itemId])

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return item ? <ItemDetail producto={item} /> : <h2>Producto no encontrado</h2>;
}

export default ItemDetailContainer
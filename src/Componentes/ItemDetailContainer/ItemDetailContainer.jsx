import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Services/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'items', id)

        getDoc(productRef).then(snapshot => {
            const dataProduct = snapshot.data()
            const productDetailed = { ...dataProduct, id: snapshot.id }
            setProduct(productDetailed)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        <h2>Cargando...</h2>
    }

    return (
        product &&
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer;

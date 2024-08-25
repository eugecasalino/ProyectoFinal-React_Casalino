import { createContext, useState } from 'react'


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if (itemExists(item.id)) {
            setCart(cart.map(product => product.id === item.id ? { ...product, cantidad: product.cantidad + quantity } : product))
        } else {
            setCart([...cart, { ...item, cantidad: quantity }])
        }
    }

    const itemExists = (id) => {
        return cart.some(item => item.id === id)
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, itemExists, itemQuantity, cartTotal, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
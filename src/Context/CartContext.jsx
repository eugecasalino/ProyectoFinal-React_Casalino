import { createContext, useState } from 'react'


export const CartContext = createContext()

<<<<<<< HEAD
export const CartContextProvider = ({ children }) => {
=======
export const CartProvider = ({ children }) => {
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if (itemExists(item.id)) {
<<<<<<< HEAD
            setCart(cart.map(product => product.id === item.id ? { ...product, cantidad: product.cantidad + quantity } : product))
        } else {
            setCart([...cart, { ...item, cantidad: quantity }])
=======
            setCart(cart.map(product =>
                product.id === item.id
                    ? { ...product, quantity: product.quantity + quantity } : product
            ))
        } else {
            setCart([...cart, { ...item, quantity }])
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
        }
    }

    const itemExists = (id) => {
        return cart.some(item => item.id === id)
    }

<<<<<<< HEAD
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
=======
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    const cartTotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            removeFromCart,
            clearCart,
            cartQuantity,
            cartTotal,
        }}>
>>>>>>> 666d4237d8c893a2ef4239b03642c9c22f30ef35
            {children}
        </CartContext.Provider>
    )
}
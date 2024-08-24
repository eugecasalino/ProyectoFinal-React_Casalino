import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import { CartProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import { CartContextProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'
import { Checkout } from './Componentes/Checkout/Checkout'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App

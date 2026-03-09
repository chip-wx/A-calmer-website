import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContainer } from './AppContainer.jsx'
import { ProductsCountProvider, ShoppingCartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UserProvider>
      <ShoppingCartProvider>
      <ProductsCountProvider>
        <AppContainer />
      </ProductsCountProvider>
    </ShoppingCartProvider>
    </UserProvider>

    
  </StrictMode>,
)

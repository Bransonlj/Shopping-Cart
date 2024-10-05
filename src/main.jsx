import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './routers/MainRouter.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <MainRouter/>
    </CartContextProvider>
  </StrictMode>,
)

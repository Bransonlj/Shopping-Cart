import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainProducts from './pages/MainProducts/mainProducts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProducts/>
  </StrictMode>,
)

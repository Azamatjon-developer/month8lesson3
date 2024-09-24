import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { OrderContext } from './context/Context.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <OrderContext>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </OrderContext>
  </BrowserRouter>,
)

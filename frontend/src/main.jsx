import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/index.jsx'
import '@/assets/css/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
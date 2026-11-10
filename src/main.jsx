import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import './styles/navbar.css'

import App from './App.jsx'

import './styles/sidebar.css'
import './styles/dashboard.css'
import './styles/responsive.css'
import './styles/clinic.css'
import './styles/lab.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

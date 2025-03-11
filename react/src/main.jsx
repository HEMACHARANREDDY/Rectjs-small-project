import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Template from './componets/Template.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Template />
  </StrictMode>,
)

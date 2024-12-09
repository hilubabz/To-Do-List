import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonDisplay from './button'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{display:'flex',justifyContent:'center'}}>TO DO LIST</h1>
    <ButtonDisplay/>
    
  </StrictMode>
)



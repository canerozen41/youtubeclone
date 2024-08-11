import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { YoutubeProvider } from './context/YoutubeContext.jsx'

createRoot(document.getElementById('root')).render(
  <YoutubeProvider> 
    <App />
  </YoutubeProvider>
)

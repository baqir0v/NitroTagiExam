import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
import { WishlistProvider } from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <WishlistProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </WishlistProvider>
  </BrowserRouter>
)

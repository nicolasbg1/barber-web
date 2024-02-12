import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './global-styles/global-style.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)

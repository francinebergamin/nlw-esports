import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* A tag do HTML root, vai renderizar o que está escrito
   dentro do App, que é um componente criado para armazenar
   o conteúdo */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

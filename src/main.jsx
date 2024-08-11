import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Añadimos bootstrap
import 'bootstrap/dist/css/bootstrap.css' 
// ! NOTA: Estilos propios deben ir debajo de bootstrap
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

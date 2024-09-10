import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Añadimos bootstrap
import 'bootstrap/dist/css/bootstrap.css' 
//Boostrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// ! NOTA: Estilos propios deben ir debajo de bootstrap
import './index.css'
import AppRoutingOne from './AppRoutingOne.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingOne/>
  </React.StrictMode>,
)

/* 
Componente que va a contener un formulario para autenticacion de usuarios
*/

import { useState } from "react"

export const LoginForm = () => {

    const initialCredentials = {
        user: '',
        password: ''
    }

    //Estado para cambiar las credenciales del login
    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>LoginForm</div>
    )
}

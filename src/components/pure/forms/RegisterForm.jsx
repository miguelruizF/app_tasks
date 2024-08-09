import { useState } from 'react'

export const RegisterForm = () => {

    //Crear usuarios
    const initialData = {
        user: '',
        name: '',
        email: '',
        password: ''
    }

    //Estado para cambiar las credenciales del registro
    const [data, setData] = useState(initialData);

    return (
        <div>RegisterForm</div>
    )
}

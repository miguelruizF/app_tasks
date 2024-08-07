import { useEffect } from "react"


export const AllCycles = () => {
    //Solo tener un useEffect en cada componente
    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            console.log('Actualizacion del componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            clearInterval(intervalID);
        }
    }, [])
    
    return (
        <div>AllCycles</div>
    )
}

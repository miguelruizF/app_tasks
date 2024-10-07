//Obtener datos
export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users'); //Devuelve una promesa de tipo response
    // return response;
    console.log('Response: ', response);
    console.log('Status', response.status);
    console.log('OK?', response.ok);
    //we return the json
    return response.json();
}
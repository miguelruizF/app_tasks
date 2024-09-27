import './App.css'
// import { Father } from './components/container/Father'
// import { Ejemplo4 } from './hooks/Ejemplo4'
// import { MiComponenteConContexto } from './hooks/Ejemplo3'
// import { Ejemplo2 } from './hooks/Ejemplo2'
// import { Ejempĺo1 } from './hooks/Ejempĺo1'
import { Task_ListComponent } from './components/container/Task_List'
import { AsyncExamples } from './components/pure/AsyncExamples'
// import { LoginFormik } from './components/pure/forms/LoginFormik'
// import { RegisterFormik } from './components/pure/forms/RegisterFormik'
// import { OptionalRender } from './components/pure/OptionalRender'
// import { GreetingStyled } from './components/pure/GreetingStyled'

function App() {
  return (
    <>
      {/* Componente de listado de tareas */}
      {/* <Task_ListComponent /> */}
      
      {/* <Ejempĺo1/> */}
      {/*  <Ejemplo2/> */}
      {/* <MiComponenteConContexto/> */}
      {/* <Ejemplo4 nombre="Miguel Ruiz"> */}
      {/* Todo lo que hay dentro del componente sera tratado como props.children */}
      {/* <h3>Contenido del children</h3> */}
      {/* </Ejemplo4> */}
      {/* <GreetingStyled name='Miguel'/> */}

      {/* Gestion de eventros */}
      {/* <Father/> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender/> */}

      {/* Ejemplo de uso de Formik y yup */}
      {/* <LoginFormik/> */}
      {/* <RegisterFormik/> */}

      {/* Ejemplos de procesos Asyncronos */}
      <AsyncExamples />
    </>
  )
}

export default App

import './App.css'
// import { Ejemplo4 } from './hooks/Ejemplo4'
// import { MiComponenteConContexto } from './hooks/Ejemplo3'
// import { Ejemplo2 } from './hooks/Ejemplo2'
// import { Ejempĺo1 } from './hooks/Ejempĺo1'
import { Task_ListComponent } from './components/container/Task_List'
// import { GreetingStyled } from './components/pure/GreetingStyled'

function App() {
  return (
    <>
      {/* Componente de listado de tareas */}
      <Task_ListComponent />
      {/* <Ejempĺo1/> */}
      {/*  <Ejemplo2/> */}
      {/* <MiComponenteConContexto/> */}
      {/* <Ejemplo4 nombre="Miguel Ruiz"> */}
      {/* Todo lo que hay dentro del componente sera tratado como props.children */}
      {/* <h3>Contenido del children</h3> */}
      {/* </Ejemplo4> */}
      {/* <GreetingStyled name='Miguel'/> */}
    </>
  )
}

export default App

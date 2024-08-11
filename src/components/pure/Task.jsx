// import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { useEffect } from 'react'

//Importar hoja de estilos task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created task');
        return () => {
            console.log(`Task: ${ task.name } is going to unmount...`);
        }
    }, [task]);
    

    return (
        <>
            <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{task.name}</span>
                </th>
                <td className='align-middle'>
                    <span>{task.description}</span>
                </td>
                <td className='align-middle'>
                    {/* TODO: sustituir por un badge */}
                    <span>{task.level}</span>
                </td>
                {/* TODO: Sustituir por iconos */}
                <td className='align-middle'>
                    <span>{task.completed}</span>
                </td>
            </tr>
            {/* <div>
                <h2 className='task-name'>Nombre: { task.name }</h2>
                <h3>Descripcion: { task.description }</h3>
                <h4>Nivel de la Tarea: { task.level }</h4>
                <h5>
                Esta tarea esta: { task.completed ? "ESTA COMPLETADA" : "PENDIENTE" }
                </h5>
                </div> */}
        </>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

// import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { useEffect } from 'react'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created task');
        return () => {
            console.log(`Task: ${ task.name } is going to unmount...`);
        }
    }, [task]);
    

    return (
        <div>
            <h2>Nombre: { task.name }</h2>
            <h3>Descripcion: { task.description }</h3>
            <h4>Nivel de la Tarea: { task.level }</h4>
            <h5>
                Esta tarea esta: { task.completed ? "ESTA COMPLETADA" : "PENDIENTE" }
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

// import React from 'react'

import { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/Task";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

//importar hoja de estilos task.scss
import '../../styles/task.scss'

export const Task_ListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);
    
    //Estado que modificara las tareas. Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    //true: cargara por defecto | false: para de cargar
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        }
    }, [tasks]);
    

    const changeCompleted = (id) =>{
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/* Card Header (title) */}
                    <div className="card-header p-3">
                        <h5>Your Tasks: </h5>
                    </div>
                    {/* Card body (contenido) */}
                    <div className="card-body" style={ {position:'relative', height: '400px'} } data-mdb-perfect-scrollbar='true'>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Iterar sobre una lista de tareas */}
                                <TaskComponent task={defaultTask}/>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista de tareas*/}
            {/* <TaskComponent task={defaultTask}/> */}
        </div>
    )
}




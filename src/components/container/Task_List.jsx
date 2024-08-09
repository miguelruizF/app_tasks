// import React from 'react'

import { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/Task";
import { useEffect } from "react";

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
            <div>
                <h1>Your Tasks: </h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista de tareas*/}
            <TaskComponent task={defaultTask}/>
        </div>
    )
}




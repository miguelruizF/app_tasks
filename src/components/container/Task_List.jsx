// import React from 'react'

import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/Task";

export const Task_ListComponent = () => {
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

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




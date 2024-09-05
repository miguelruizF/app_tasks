// import React from 'react'

import { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/Task";
import { Table } from "react-bootstrap";
import { TaskForm } from "../pure/forms/TaskForm";

//importar hoja de estilos task.scss
import '../../styles/task.scss'

export const Task_ListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);
    
    //Estado que modificara las tareas. Estado del componente
    const [ tasks, setTasks ] = useState([ defaultTask1, defaultTask2, defaultTask3 ]);

    //true: cargara por defecto | false: para de cargar
    const [ loading, setLoading ] = useState( true );

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log( 'Task state has been modified' );
        setTimeout(() => {
            setLoading( false );
        }, 2000);
        return () => {
            console.log( 'TaskList component is going to unmount...' );
        }
    }, [tasks]);

    //Funcion de tarea completada
    function completedTask(task) {
        console.log(`Tarea completada`, task);
        const index = tasks.indexOf(task); //Buscamos el indice de la tarea
        const tempTask = [...tasks]; //Creamos una copia de todas las tareas

        tempTask[index].completed = !tempTask[index].completed;
        //Update the state of the component with the new list of tasks and it will update the iteration of the task in order to show the task updated
        setTasks(tempTask);
    }

    //Funcion para eliminar tareas    
    function deletedTask(task) {
        console.log(`Tarea eliminada`, task);
        const index = tasks.indexOf(task); //Buscamos el indice de la tarea
        const tempTask = [...tasks]; //Creamos una copia de todas las tareas
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        console.log(`Tarea eliminada`, task);
        // const index = tasks.indexOf(task); //Buscamos el indice de la tarea
        const tempTask = [...tasks]; //Creamos una copia de todas las tareas
        tempTask.push(task);
        setTasks(tempTask);
    }

    const ListTable = () => {
        return (
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
                    {tasks.map((task, index) => {
                        return(
                            <TaskComponent 
                            key={index} 
                            task={ task } 
                            complete={ completedTask }
                            remove={ deletedTask }
                            />
                        )
                    } )}
                </tbody>
            </Table>
        )
    }

    let tasksTable = <ListTable></ListTable> //Guardar lo que devuelva el componente y despues llamarlo a renderizar

    if ( tasks.length > 0 ) {
        tasksTable = <ListTable></ListTable>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className="col-12">
                <div className="card mb-3">
                    {/* Card Header (title) */}
                    <div className="card-header p-3">
                        <h5>Your Tasks: </h5>
                    </div>
                    {/* Card body (contenido) */}
                    <div className="card-body" style={ { position:'relative', height: '400px' } } data-mdb-perfect-scrollbar='true'>
                        {/* TODO: Add loading spinner */}
                        { loading ? (<p style={ loadingStyle }>Loading Tasks...</p>) : tasksTable }
                    </div>
                </div>
                <TaskForm add={ addTask } length={ tasks.length }></TaskForm>
            </div>
        </div>
    )
}




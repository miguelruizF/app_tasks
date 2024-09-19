import { useParams } from "react-router-dom"

// import React from 'react'

export const TaskDetailPage = ({ tasks }) => {

    const { id } = useParams();

    const task = tasks.find((task) => task.id === parseInt(id));

    if(!task){
        return <div>Task not found</div>
    }

    return (
        <>
            <h1>Task Detail - { id }</h1>
            <h2>{ task.name }</h2>
            <h3>{ task.description }</h3>
        </>
    )
}

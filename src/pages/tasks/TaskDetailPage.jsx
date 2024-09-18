import { useParams } from "react-router-dom"

// import React from 'react'

export const TaskDetailPage = ({ task }) => {

    const { id } = useParams();

    return (
        <>
            <h1>Task Detail - { id }</h1>
            <h2>{ task.name }</h2>
            <h3>{ task.description }</h3>
        </>
    )
}

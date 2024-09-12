import { useParams } from "react-router-dom"

// import React from 'react'

export const TaskDetailPage = () => {

    const { id } = useParams();

    return (
        <>
            <h1>Task Detail - { id }</h1>
        </>
    )
}

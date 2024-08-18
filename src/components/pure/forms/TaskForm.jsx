import { useRef } from "react"
import { Button, Form } from "react-bootstrap"
import PropTypes from 'prop-types'
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

export const TaskForm = ( { add } ) => {

    //Referencias a los datos
    const nameRed = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    //Funcion para agregar tarea desde el formulario
    function addTask(e) {
        e.preventDefault(); //Evitar la recarga
        const newTask = new Task(
            nameRed.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <Form onSubmit={ addTask } className="card">
            <Form.Group>
                <Form.Control ref={ nameRed } id="inputName" type="text" required autoFocus placeholder="Enter name of task" className="mb-2"></Form.Control>
                <Form.Control ref={ descriptionRef } id="inputDescription" type="text" required autoFocus placeholder="Enter the description of task" className="mb-2"></Form.Control>
                <Form.Label htmlFor="selectLevel" className="sr-only fw-bold">Priority</Form.Label>
                <Form.Select ref={ levelRef } defaultValue={ LEVELS.NORMAL } id="selectLevel">
                    <option value={ LEVELS.NORMAL }>Normal</option>
                    <option value={ LEVELS.URGENT }>Urgent</option>
                    <option value={ LEVELS.BLOCKING }>Blocking</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit" className="btn-primary mt-2">Add</Button>
        </Form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}
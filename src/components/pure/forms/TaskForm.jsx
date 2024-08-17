import { useRef } from "react"
import { Form } from "react-bootstrap"
import PropTypes from 'prop-types'
import { LEVELS } from "../../../models/levels.enum";

export const TaskForm = ( { add } ) => {

    //Referencias a los datos
    const nameRed = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    //Funcion para agregar tarea desde el formulario
    function addTask(e) {
        e.preventDefault(); //Evitar la recarga
    }

    return (
        <Form>

        </Form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}
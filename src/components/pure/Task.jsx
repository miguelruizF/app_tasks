// import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { useEffect } from 'react'

//Importar hoja de estilos task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'
import { Badge } from 'react-bootstrap'

const TaskComponent = ({ task, complete }) => {

    useEffect(() => {
        console.log('Created task');
        return () => {
            console.log(`Task: ${ task.name } is going to unmount...`);
        }
    }, [ task ]);

    //Function that returns a Badge depending on the level of the task
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return( <h6 className='mb-0'>
                    {/* <span>
                        { task.level }
                    </span> */}
                    <Badge className='bg-primary'>
                        { task.level }
                    </Badge>
                </h6> )
            case LEVELS.URGENT:
                return( <h6 className='mb-0'>
                    <Badge className='bg-warning'>
                        { task.level }
                    </Badge>
                </h6> )
            case LEVELS.BLOCKING:
                return( <h6 className='mb-0'>
                    <Badge className='bg-danger'>
                        { task.level }
                    </Badge>
                </h6> )
            default:
                break;
        }
    }

    //Function that returns icon depending if task is completed or not
    function taskCompĺetedIcon() {
        if( task.completed ){
            return( <i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={ { color:'green', fontWeight: 'bold' } }></i> )
        }else{
            return( <i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={ {color:'gray', fontWeight: 'bold' } }></i> )
        }
    }

    return (
        <>
            <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{ task.name }</span>
                </th>
                <td className='align-middle'>
                    <span>{ task.description }</span>
                </td>
                <td className='align-middle'>
                    {/* Execution of function to return badge element */}
                    { taskLevelBadge() } 
                </td>
                {/* TODO: Sustituir por iconos */}
                <td className='align-middle'>
                    {/* Execution of function to return icon depending on completion */}
                    { taskCompĺetedIcon() }
                    {/* <span>{ task.completed ? 'Completed' : 'Pending' }</span> */}
                    <i className='bi-trash task-action' style={ { color: 'tomato', fontSize: '20px' } }></i>
                </td>
            </tr>
        </>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ),
    complete: PropTypes.func.isRequired
}

export default TaskComponent

/* 
Ejemplo de componente de tipo clase que dispone de los metodos del ciclo de vida de un componente
*/

import { Component } from 'react';
// import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Cuando se instancia el componente - "Inicializacion de variables"');
        
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente antes de mostrarlo');
        
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECIEVE PROPS: Si va a recibir nuevas props');
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* 
            Controla si el componente debe o no actualizarse
        */
    //    return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse');
        
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');
        
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
/* 
LifeCycleExample.propTypes = {

}; */

export default LifeCycleExample;
//se crea el nuevo componente en donde se imprimira el resultado de la busqueda
import React, { Component } from 'react';
import App from '../App';


//se traen las propiedades de App.js 
class Resultado extends Component {

    mostrarImagenes = () =>{
        console.log(this.props.mostrarImagenes);
    }

    render() { 
        return ( 
            //se crea un marco tipo react para no implementar un div de mas
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;
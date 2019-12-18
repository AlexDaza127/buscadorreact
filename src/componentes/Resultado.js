//se crea el nuevo componente en donde se imprimira el resultado de la busqueda
import React, { Component } from 'react';
import App from '../App';
import Imagen from './Imagen';

//se traen las propiedades de App.js 
class Resultado extends Component {

    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        console.log(imagenes);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        //se llama al componente Imagen para imprimir lo que contiene
                        <Imagen></Imagen>
                    ))}
                </div>
            </React.Fragment>
        )
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